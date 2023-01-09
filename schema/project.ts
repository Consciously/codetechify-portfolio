import { objectType, extendType } from 'nexus';

export const Project = objectType({
	name: 'Project',
	definition: t => {
		t.string('id');
		t.string('title');
		t.string('description');
	},
});

export const AllProjects = extendType({
	type: 'Query',
	definition: t => {
		t.list.field('allProjects', {
			type: 'Project',
			resolve: async (_, __, ctx) => {
				console.log(ctx);
				const allProjects = await ctx.prisma.user.findMany();
				return allProjects;
			},
		});
	},
});
