import { projects, users } from '../lib/projectDataGenerator';
import { prisma } from '../lib/prisma';

const main = async () => {
	await prisma.project.deleteMany();
	await prisma.user.deleteMany();
	await prisma.technology.deleteMany();

	await prisma.project.createMany({ data: projects });
	await prisma.user.createMany({ data: users });

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
		const randomIndex = Math.floor(Math.random() * createdPersonsArray.length); // generates a random index between 0 and the number of users
		const randomCount = Math.floor(Math.random() * 4) + 1; // generates a random number between 1 and 4
		for (let j = 0; j < randomCount; j++) {
			if (
				i + j < createdProjectsArray.length &&
				randomIndex < createdPersonsArray.length
			) {
				await prisma.project.update({
					where: {
						id: createdProjectsArray[i + j].id,
					},
					data: {
						user: {
							connect: {
								id: createdPersonsArray[randomIndex].id,
							},
						},
					},
				});
			}
		}
		i += randomCount - 1;
	}
};

main()
	.catch(e => {
		console.error(e);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
