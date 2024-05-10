"use client";

import { useState } from "react";

export default function UploadImage() {
  const [image, setImage] = useState(null);
  const [serverId, setServerId] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image to upload.");
      return;
    }

    const data = new FormData();
    data.append("image", image);
    // data.append("serverId", serverId);

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
        `Image uploaded successfully. Path: ${responseData.path}`
      );
    } catch (error: any) {
      setResponseMessage(`Error uploading image: ${error.message}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="file">Choose Image:</label>
          <input
            type="file"
            id="file"
            name="file"
            accept="image/*"
            onChange={(e: any) => setImage(e.target.files[0])}
          />
        </div>

        <button type="submit">Upload</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}
