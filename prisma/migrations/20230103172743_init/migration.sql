-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "projectTitle" TEXT NOT NULL,
    "projectDescription" TEXT NOT NULL,
    "projectDemoUrl" TEXT NOT NULL,
    "projectRepoUrl" TEXT NOT NULL,
    "projectImageUrl" TEXT NOT NULL,
    "projectIsPublished" BOOLEAN NOT NULL DEFAULT false,
    "projectCount" INTEGER NOT NULL DEFAULT 0,
    "projectCreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Technology" (
    "id" SERIAL NOT NULL,
    "technologyName" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,

    CONSTRAINT "Technology_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "technologyName" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectsOnTechnologies" (
    "projectId" INTEGER NOT NULL,
    "technologyId" INTEGER NOT NULL,

    CONSTRAINT "ProjectsOnTechnologies_pkey" PRIMARY KEY ("projectId","technologyId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_projectDemoUrl_key" ON "Project"("projectDemoUrl");

-- CreateIndex
CREATE UNIQUE INDEX "Project_projectRepoUrl_key" ON "Project"("projectRepoUrl");

-- CreateIndex
CREATE UNIQUE INDEX "Project_projectImageUrl_key" ON "Project"("projectImageUrl");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectsOnTechnologies" ADD CONSTRAINT "ProjectsOnTechnologies_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectsOnTechnologies" ADD CONSTRAINT "ProjectsOnTechnologies_technologyId_fkey" FOREIGN KEY ("technologyId") REFERENCES "Technology"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
