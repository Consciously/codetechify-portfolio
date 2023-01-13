import { objectType, extendType, nonNull, stringArg, booleanArg } from 'nexus';

export const Project = objectType({
	name: 'Project',
	definition: t => {
		t.string('id');
		t.string('title');
		t.string('description');
		t.string('isPublished');
		t.date('createdAt');
		t.date('updatedAt');
		t.nonNull.int('viewed');
		t.nullable.field('user', {
			type: 'User',
			resolve: (root, __, ctx) => {
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
		t.nonNull.list.nonNull.field('getAllProjects', {
			type: 'Project',
			resolve: (_, __, ctx) => {
				return ctx.prisma.project.findMany();
			},
		});
		t.nonNull.list.nonNull.field('getAllProjectsByUserId', {
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
					take: 1,
				});
			},
		});
		t.nonNull.list.nonNull.field('getAllIsPublishedProjects', {
			type: 'Project',
			resolve: async (_, __, ctx) => {
				return ctx.prisma.project.findMany({
					where: {
						isPublished: {
							equals: true,
						},
					},
				});
			},
		});
		t.nonNull.field('getProjectsById', {
			type: 'Project',
			args: {
				projectId: nonNull(stringArg()),
			},
			resolve: async (root, args, ctx) => {
				await ctx.prisma.project.update({
					where: {
						id: args.projectId,
					},
					data: {
						viewed: {
							increment: 1,
						},
					},
				});

				return ctx.prisma.project.findUnique({
					where: {
						id: args.projectId,
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
		t.field('updateProjectById', {
			type: 'Project',
			args: {
				title: stringArg(),
				description: stringArg(),
				demoUrl: stringArg(),
				repoUrl: stringArg(),
				imageUrl: stringArg(),
				projectId: nonNull(stringArg()),
			},
			resolve: (_, args, ctx) => {
				return ctx.prisma.project.update({
					where: {
						id: args.projectId,
					},
					data: {
						title: args.title,
						description: args.description,
						demoUrl: args.demoUrl,
						repoUrl: args.repoUrl,
						imageUrl: args.imageUrl,
					},
				});
			},
		});
		t.nonNull.field('deleteProjectById', {
			type: 'Project',
			args: {
				projectId: nonNull(stringArg()),
			},
			resolve: (_, args, ctx) => {
				return ctx.prisma.project.delete({
					where: {
						id: args.projectId,
					},
				});
			},
		});
		t.nonNull.field('changeIsPublish', {
			type: 'Project',
			args: {
				isPublished: booleanArg(),
				projectId: nonNull(stringArg()),
			},
			resolve: (_, args, ctx) => {
				return ctx.prisma.project.update({
					where: {
						id: args.projectId,
					},
					data: {
						isPublished: args.isPublished,
					},
				});
			},
		});
	},
});
