import {
	objectType,
	extendType,
	nonNull,
	stringArg,
	booleanArg,
	list,
	nullable,
} from 'nexus';

export const Project = objectType({
	name: 'Project',
	definition: t => {
		t.nonNull.string('id');
		t.nonNull.string('title');
		t.nullable.string('description');
		t.nonNull.string('isPublished');
		t.nonNull.date('createdAt');
		t.nonNull.date('updatedAt');
		t.nonNull.int('viewed');
		t.field('user', {
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
		t.field('getAllProjects', {
			type: nonNull(list(nonNull('Project'))),
			resolve: (_, __, ctx) => {
				return ctx.prisma.project.findMany();
			},
		});
		t.field('getAllProjectsByUserId', {
			type: nonNull(list(nonNull('Project'))),
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
		t.field('getAllIsPublishedProjects', {
			type: nonNull(list(nonNull('Project'))),
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
			type: nonNull('Project'),
			args: {
				projectId: nonNull(stringArg()),
			},
			resolve: async (_, args, ctx) => {
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
			type: nonNull('Project'),
			args: {
				title: nonNull(stringArg()),
				description: nullable(stringArg()),
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
			type: nonNull('Project'),
			args: {
				title: stringArg(),
				description: stringArg(),
				demoUrl: stringArg(),
				repoUrl: stringArg(),
				imageUrl: stringArg(),
				projectId: stringArg(),
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
			type: nonNull('Project'),
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
			type: nonNull('Project'),
			args: {
				isPublished: nonNull(booleanArg()),
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
