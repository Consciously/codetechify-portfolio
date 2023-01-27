import { faker } from '@faker-js/faker';

type Project = {
	title: string;
	slug: string;
	description: string;
	demoUrl: string;
	repoUrl: string;
	imageUrl: string;
};

type User = {
	name: string;
	email: string;
};

const projectsRaw = Array.from({ length: 10 }, (_, i) => ({
	title: faker.lorem.sentence(3),
	description: faker.lorem.paragraph(),
	demoUrl: faker.internet.url(),
	repoUrl: faker.internet.url(),
	imageUrl: faker.image.technics(640, 480, true),
}));

const usersRaw = Array.from({ length: 10 }, (_, i) => ({
	name: `${faker.name.firstName()} ${faker.name.lastName()}`,
}));

export const projects = projectsRaw.map(
	(project): Project => ({
		...project,
		slug: project.title
			.toLocaleLowerCase()
			.split(' ')
			.join('-')
			.replace('.', ''),
	}),
);

export const users = usersRaw.map(
	(user): User => ({
		...user,
		email: `${faker.name.firstName().charAt(0).toLowerCase()}${faker.name
			.lastName()
			.toLowerCase()}@gmail.com`,
	}),
);
