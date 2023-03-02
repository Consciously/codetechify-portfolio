import { Project, Technology } from 'nexus-prisma';
import {
	objectType,
	extendType,
	nonNull,
	stringArg,
	nullable,
	booleanArg,
	list,
} from 'nexus';

export const ProjectType = objectType({
	name: Project.$name,
	description: Project.$description,
	definition: t => {
		t.field(Project.id);
		t.field(Project.title);
		t.field(Project.slug);
		t.field(Project.description);
		t.field(Project.demoUrl);
		t.field(Project.repoUrl);
		t.field(Project.imageUrl);
		t.field(Project.isPublished);
		t.field(Project.viewed);
		t.field(Project.createdAt);
		t.field(Project.updatedAt);
		t.field(Project.user);
		t.field(Project.technologies);
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

export const ProjectMutationType = extendType({
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
				technologyNames: nonNull(list(nonNull(stringArg()))),
			},
			resolve: async (_, args, ctx) => {
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
						technologies: {
							connect: args.technologyNames.map(name => ({ name })),
						},
					},
				});
			},
		});
		t.nonNull.field('updateProjectById', {
			type: 'Project',
			args: {
				title: nullable(stringArg()),
				description: nullable(stringArg()),
				demoUrl: nullable(stringArg()),
				repoUrl: nullable(stringArg()),
				imageUrl: nullable(stringArg()),
				isPublished: nullable(booleanArg()),
				projectId: nonNull(stringArg()),
				checkTechnology: nonNull(stringArg()),
				technologyName: nullable(stringArg()),
			},
			resolve: async (_, args, ctx) => {
				const project = await ctx.prisma.project.findUniqueOrThrow({
					where: {
						id: args.projectId,
					},
					include: {
						technologies: true,
					},
				});

				const technologies = await ctx.prisma.technology.findMany();

				const projectTechnologies = project.technologies;

				const projectTechnologyIndex = projectTechnologies.findIndex(
					technology => technology.name === args.checkTechnology,
				);

				if (
					(typeof projectTechnologies !== 'undefined' ||
						typeof projectTechnologies !== null) &&
					typeof args.technologyName !== 'undefined'
				) {
					if (projectTechnologyIndex !== -1) {
						const projectTechnology =
							projectTechnologies[projectTechnologyIndex];
						projectTechnology.name = args.technologyName;
					} else {
						const technology = technologies.find(
							technology =>
								args.technologyName && technology.name === args.technologyName,
						);

						if (typeof technology !== 'undefined') {
							const technologyId = technology.id;
							projectTechnologies.push({
								id: technologyId,
								name: args.technologyName,
							});
						}
					}
				}
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
						technologies: {
							set:
								projectTechnologies &&
								projectTechnologies.map(({ name }: any) => ({
									name,
								})),
						},
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
