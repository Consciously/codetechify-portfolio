import { PrismaClient } from '@prisma/client';
// import { projects, users } from '../api/data';

const prisma = new PrismaClient();

const main = async () => {
	await prisma.user.deleteMany({});
	await prisma.project.deleteMany({});

	await prisma.project.create({
		data: {
			title: 'This is a test title',
			description: 'This is an awesome test project',
			demoUrl: 'https://google.com',
			repoUrl: 'http://google.com',
			imageUrl: 'http://google.com',
			technologies: ['Next.js', 'TypeScript'],
			isPublished: true,
			user: {
				create: {
					name: 'John Doe',
				},
			},
		},
	});
};

main()
	.catch(error => {
		console.error(error);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
