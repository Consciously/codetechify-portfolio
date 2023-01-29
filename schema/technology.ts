import { objectType, extendType, nonNull, stringArg, list } from 'nexus';
import { Technology } from 'nexus-prisma';

export const TechnologyType = objectType({
	name: Technology.$name,
	description: Technology.$description,
	definition: t => {
		t.field(Technology.id);
		t.field(Technology.name);
		t.field(Technology.projects);
	},
});

export const TechnologyQueryType = extendType({
	type: 'Query',
	definition: t => {
		t.nonNull.list.nonNull.field('getAllTechnologies', {
			type: 'Technology',
			resolve: (_, __, ctx) => {
				return ctx.prisma.technology.findMany();
			},
		});
		t.nonNull.field('getTechnologyById', {
			type: 'Technology',
			args: {
				technologyId: nonNull(stringArg()),
			},
			resolve: (_, args, ctx) => {
				return ctx.prisma.technology.findUniqueOrThrow({
					where: {
						id: args.technologyId,
					},
				});
			},
		});
	},
});

export const TechnologyMutationType = extendType({
	type: 'Mutation',
	definition: t => {
		t.nonNull.field('addTechnology', {
			type: 'Technology',
			args: {
				technologyName: nonNull(stringArg()),
			},
			resolve: (_, args, ctx) => {
				return ctx.prisma.technology.create({
					data: {
						name: args.technologyName,
					},
				});
			},
		});
	},
});
