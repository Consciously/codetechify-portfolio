import { faker } from '@faker-js/faker';
import { prisma } from '../lib/prisma';

const main = async () => {
	const projects = Array.from({ length: 10 }, (_, i) => ({
		title: faker.lorem.sentence(),
		description: faker.lorem.paragraph(),
		demoUrl: faker.internet.url(),
		repoUrl: faker.internet.url(),
		imageUrl: faker.image.imageUrl(),
	}));

	const persons = Array.from({ length: 10 }, (_, i) => ({
		name: `${faker.name.firstName()} ${faker.name.lastName()}`,
		email: `${faker.name.firstName().charAt(0).toLowerCase()}${faker.name
			.lastName()
			.toLowerCase()}@gmail.com`,
	}));

	await prisma.project.deleteMany();
	await prisma.user.deleteMany();

	await prisma.project.createMany({ data: projects });
	await prisma.user.createMany({ data: persons });

	const createdProjectsArray = await prisma.project.findMany({
		select: {
			id: true,
		},
	});

	const createdPersonsArray = await prisma.user.findMany({
		select: {
			id: true,
		},
	});

	for (let i = 0; i < createdProjectsArray.length; i++) {
		await prisma.project.update({
			where: {
				id: createdProjectsArray[i].id,
			},
			data: {
				user: {
					connect: {
						id: createdPersonsArray[i].id,
					},
				},
			},
		});
	}
};

main()
	.catch(e => {
		console.error(e);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
