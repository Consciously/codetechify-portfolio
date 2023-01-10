import { objectType, extendType, nonNull, stringArg } from 'nexus';

export const Project = objectType({
	name: 'Project',
	definition: t => {
		t.string('id');
		t.string('title');
		t.string('description');
		t.nullable.field('user', {
			type: 'User',
			resolve: (root, __, ctx) => {
				console.log('Root', root);
				return ctx.prisma.project
					.findUnique({
						where: {
							id: String(root.id),
						},
					})
					.user();
			},
		});
	},
});

export const ProjectQuery = extendType({
	type: 'Query',
	definition: t => {
		t.nonNull.list.nonNull.field('allProjects', {
			type: 'Project',
			resolve: (_, __, ctx) => {
				return ctx.prisma.project.findMany();
			},
		});
		t.nonNull.list.nonNull.field('allProjectsByUserId', {
			type: 'Project',
			args: {
				userId: nonNull(stringArg()),
			},
			resolve: (_, args, ctx) => {
				return ctx.prisma.project.findMany({
					where: {
						user: {
							id: args.userId,
						},
					},
				});
			},
		});
	},
});

export const ProjectMutation = extendType({
	type: 'Mutation',
	definition: t => {
		t.field('addProject', {
			type: 'Project',
			args: {
				title: nonNull(stringArg()),
				description: nonNull(stringArg()),
				demoUrl: nonNull(stringArg()),
				repoUrl: nonNull(stringArg()),
				imageUrl: nonNull(stringArg()),
				userId: nonNull(stringArg()),
			},
			resolve: (_, args, ctx) => {
				return ctx.prisma.project.create({
					data: {
						title: args.title,
						description: args.description,
						demoUrl: args.demoUrl,
						repoUrl: args.repoUrl,
						imageUrl: args.imageUrl,
						user: {
							connect: {
								id: args.userId,
							},
						},
					},
				});
			},
		});
	},
});
