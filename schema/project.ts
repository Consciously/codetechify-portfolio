import { Project } from 'nexus-prisma';
import {
	objectType,
	extendType,
	nonNull,
	stringArg,
	nullable,
	booleanArg,
} from 'nexus';

export const ProjectType = objectType({
	name: Project.$name,
	description: Project.$description,
	definition: t => {
		t.field(Project.id);
		t.field(Project.title);
		t.field(Project.description);
		t.field(Project.demoUrl);
		t.field(Project.repoUrl);
		t.field(Project.imageUrl);
		t.field(Project.isPublished);
		t.field(Project.viewed);
		t.field(Project.createdAt);
		t.field(Project.updatedAt);
		t.field(Project.user);
	},
});

export const ProjectQueryType = extendType({
	type: 'Query',
	definition: t => {
		t.nonNull.list.nonNull.field('getAllProjects', {
			type: 'Project',
			resolve: (_, __, ctx) => {
				return ctx.prisma.project.findMany();
			},
		});
		t.nonNull.list.nonNull.field('getAllPublishedProjects', {
			type: 'Project',
			resolve: (_, __, ctx) => {
				return ctx.prisma.project.findMany({
					where: {
						isPublished: {
							equals: true,
						},
					},
				});
			},
		});
		t.nonNull.field('getProjectById', {
			type: 'Project',
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

				return ctx.prisma.project.findUniqueOrThrow({
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
		t.nonNull.field('addProject', {
			type: 'Project',
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
		t.nonNull.field('updateProjectById', {
			type: 'Project',
			args: {
				title: stringArg(),
				description: stringArg(),
				demoUrl: stringArg(),
				repoUrl: stringArg(),
				imageUrl: stringArg(),
				isPublished: booleanArg(),
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
						isPublished: args.isPublished,
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
