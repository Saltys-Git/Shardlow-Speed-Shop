-- CreateTable
CREATE TABLE "Images" (
    "id" SERIAL NOT NULL,
    "url" TEXT[],
    "serviceId" TEXT,
    "showInGallery" BOOLEAN NOT NULL,
    "uploadedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "tempOTP" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LoginSessions" (
    "id" SERIAL NOT NULL,
    "loggedAt" TIMESTAMP(3) NOT NULL,
    "ip" TEXT NOT NULL,

    CONSTRAINT "LoginSessions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LoginSessions" ADD CONSTRAINT "LoginSessions_id_fkey" FOREIGN KEY ("id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
