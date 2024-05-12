import { writeFile } from "fs/promises";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const data = await req.formData();

  const files = data.getAll("image") as File[];
  const serviceId = data.get("serviceId") as string;
  const checkbox: boolean = !!data.get("checkbox");

  if (files.length === 0) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  try {
    const urls = await Promise.all(
      files.map(async (file) => {
        const byteData = await file.arrayBuffer();
        const buffer = Buffer.from(byteData);
        const path = `./public/images/${file.name}`;

        await writeFile(path, buffer);

        return path;
      })
    );

    const createdImages = await prisma.images.createMany({
      data: urls.map((url) => ({
        url: [url],
        serviceId: serviceId ?? null,
        showInGallery: checkbox ?? false,
      })),
    });

    return NextResponse.json(
      { images: createdImages, paths: urls },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
