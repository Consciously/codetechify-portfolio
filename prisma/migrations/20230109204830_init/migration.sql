/*
  Warnings:

  - The primary key for the `Project` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `projectCount` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `projectCreatedAt` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `projectDemoUrl` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `projectDescription` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `projectImageUrl` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `projectIsPublished` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `projectRepoUrl` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `projectTitle` on the `Project` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `projectId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `technologyName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `ProjectsOnTechnologies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Technology` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[demoUrl]` on the table `Project` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[repoUrl]` on the table `Project` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[imageUrl]` on the table `Project` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `demoUrl` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `repoUrl` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_userId_fkey";

-- DropForeignKey
ALTER TABLE "ProjectsOnTechnologies" DROP CONSTRAINT "ProjectsOnTechnologies_projectId_fkey";

-- DropForeignKey
ALTER TABLE "ProjectsOnTechnologies" DROP CONSTRAINT "ProjectsOnTechnologies_technologyId_fkey";

-- DropIndex
DROP INDEX "Project_projectDemoUrl_key";

-- DropIndex
DROP INDEX "Project_projectImageUrl_key";

-- DropIndex
DROP INDEX "Project_projectRepoUrl_key";

-- AlterTable
ALTER TABLE "Project" DROP CONSTRAINT "Project_pkey",
DROP COLUMN "projectCount",
DROP COLUMN "projectCreatedAt",
DROP COLUMN "projectDemoUrl",
DROP COLUMN "projectDescription",
DROP COLUMN "projectImageUrl",
DROP COLUMN "projectIsPublished",
DROP COLUMN "projectRepoUrl",
DROP COLUMN "projectTitle",
ADD COLUMN     "count" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "demoUrl" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "isPublished" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "repoUrl" TEXT NOT NULL,
ADD COLUMN     "technologies" TEXT[],
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Project_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Project_id_seq";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "projectId",
DROP COLUMN "technologyName",
ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- DropTable
DROP TABLE "ProjectsOnTechnologies";

-- DropTable
DROP TABLE "Technology";

-- CreateIndex
CREATE UNIQUE INDEX "Project_demoUrl_key" ON "Project"("demoUrl");

-- CreateIndex
CREATE UNIQUE INDEX "Project_repoUrl_key" ON "Project"("repoUrl");

-- CreateIndex
CREATE UNIQUE INDEX "Project_imageUrl_key" ON "Project"("imageUrl");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
