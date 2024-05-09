-- CreateTable
CREATE TABLE "TableName" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "serverid" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TableName_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LoginSessions" (
    "id" SERIAL NOT NULL,
    "loggedAt" TIMESTAMP(3) NOT NULL,
    "ip" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "LoginSessions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LoginSessions" ADD CONSTRAINT "LoginSessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
