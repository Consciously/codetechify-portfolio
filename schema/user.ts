import { objectType, extendType, nonNull, stringArg } from 'nexus';

export const User = objectType({
	name: 'User',
	definition: t => {
		t.string('id');
		t.string('name');
		t.nullable.list.field('projects', {
			type: 'Project',
			resolve: (root, __, ctx) => {
				root;
				return ctx.prisma.user
					.findUnique({
						where: {
							id: String(root.id),
						},
					})
					.projects();
			},
		});
	},
});

export const UserQuery = extendType({
	type: 'Query',
	definition: t => {
		t.nonNull.list.nonNull.field('allUsers', {
			type: 'User',
			resolve: (_, __, ctx) => {
				// console.log(args);
				return ctx.prisma.user.findMany();
			},
		});
	},
});

export const UserMutation = extendType({
	type: 'Mutation',
	definition: t => {
		t.field('addUser', {
			type: 'User',
			args: {
				name: nonNull(stringArg()),
			},
			resolve: (_, args, ctx) => {
				return ctx.prisma.user.create({
					data: {
						name: args.name,
					},
				});
			},
		});
	},
});
