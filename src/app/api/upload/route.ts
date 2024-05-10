import { writeFile } from "fs/promises";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const data = await req.formData();

  const file = data.get("image") as unknown as File;
  const serverId = "hello";

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }
  try {
    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const path = `./public/images/${file.name}`;

    console.log("path & buffer", path, buffer);

    await writeFile(path, buffer);

    const createdImage = await prisma.images.create({
      data: {
        url: path,
        serverid: serverId ?? null,
      },
    });

    return NextResponse.json(
      { image: createdImage, path: path },
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
