"use client";
import { useState } from "react";

export default function UploadImage() {
  const [images, setImages] = useState<File[]>([]);
  const [serviceId, setServiceId] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (images.length === 0) {
      alert("Please select at least one image to upload.");
      return;
    }

    const data = new FormData();
    images.forEach((image) => data.append("image", image));
    data.append("serviceId", serviceId);
    data.append("checkbox", String(checkbox));

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error(`Failed to upload image: ${response.status}`);
      }

      const responseData = await response.json();
      setResponseMessage(
        `Image(s) uploaded successfully. Path(s): ${responseData.paths.join(
          ", "
        )}`
      );
    } catch (error: any) {
      setResponseMessage(`Error uploading image: ${error.message}`);
    }
  };

  const handleFileChange = (e: any) => {
    const selectedFiles = Array.from(e.target.files) as File[];
    setImages(selectedFiles);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="file">Choose Image(s):</label>
          <input
            type="file"
            id="file"
            name="file"
            accept="image/*"
            onChange={handleFileChange}
            multiple
          />
        </div>

        <div>
          <label htmlFor="serviceId">Select Service ID:</label>
          <select
            id="serviceId"
            name="serviceId"
            onChange={(e) => setServiceId(e.target.value)}
          >
            <option value="">Select Service ID</option>
            <option value="service1">Service 1</option>
            <option value="service2">Service 2</option>
          </select>
        </div>
        <div>
          <label htmlFor="check">Show In Gallery</label>
          <input
            type="checkbox"
            id="check"
            name="checkbox"
            checked={checkbox}
            onChange={(e) => setCheckbox(e.target.checked)}
          />
        </div>

        <button type="submit">Upload</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}
