-- CreateEnum
CREATE TYPE "Status" AS ENUM ('SUCCESS', 'PENDING', 'FAILED');

-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "subject" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "recepientEmail" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'PENDING',
    "notificationTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);
