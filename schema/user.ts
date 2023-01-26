import { User } from 'nexus-prisma';
import { objectType, extendType, nonNull, stringArg } from 'nexus';

export const UserType = objectType({
	name: User.$name,
	description: User.$description,
	definition: t => {
		t.field(User.id);
		t.field(User.name);
		t.field(User.email);
		t.field(User.projects);
	},
});

export const UserQueryType = extendType({
	type: 'Query',
	definition: t => {
		t.nonNull.list.nonNull.field('getAllUsers', {
			type: 'User',
			resolve: (_, __, ctx) => {
				return ctx.prisma.user.findMany();
			},
		});
		t.nonNull.list.nonNull.field('getAllProjectsFromUser', {
			type: 'User',
			args: {
				userId: nonNull(stringArg()),
			},
			resolve: (_, args, ctx) => {
				return ctx.prisma.user.findMany({
					where: {
						id: args.userId,
					},
				});
			},
		});
	},
});

/* OLD */

// import { objectType, extendType, nonNull, stringArg, list } from 'nexus';

// export const User = objectType({
// 	name: 'User',
// 	definition: t => {
// 		t.nonNull.string('id');
// 		t.nonNull.string('name');
// 		t.nonNull.string('email');
// 		t.nonNull.field('projects', {
// 			type: nonNull(list(nonNull('Project'))),
// 			resolve: (root, __, ctx) => {
// 				root;
// 				return ctx.prisma.user
// 					.findUnique({
// 						where: {
// 							id: String(root.id),
// 						},
// 					})
// 					.projects();
// 			},
// 		});
// 	},
// });

// export const UserQuery = extendType({
// 	type: 'Query',
// 	definition: t => {
// 		t.field('allUsers', {
// 			type: nonNull(list(nonNull('User'))),
// 			resolve: (_, __, ctx) => {
// 				return ctx.prisma.user.findMany();
// 			},
// 		});
// 	},
// });

// export const UserMutation = extendType({
// 	type: 'Mutation',
// 	definition: t => {
// 		t.field('addUser', {
// 			type: nonNull('User'),
// 			args: {
// 				name: nonNull(stringArg()),
// 				email: nonNull(stringArg()),
// 			},
// 			resolve: (_, args, ctx) => {
// 				return ctx.prisma.user.create({
// 					data: {
// 						name: args.name,
// 						email: args.email,
// 					},
// 				});
// 			},
// 		});
// 		t.field('updateUserById', {
// 			type: nonNull('User'),
// 			args: {
// 				name: stringArg(),
// 				email: stringArg(),
// 				userId: nonNull(stringArg()),
// 			},
// 			resolve: (_, args, ctx) => {
// 				return ctx.prisma.user.update({
// 					where: {
// 						id: args.userId,
// 					},
// 					data: {
// 						name: args.name,
// 						email: args.email,
// 					},
// 				});
// 			},
// 		});
// 		t.field('deleteUserById', {
// 			type: nonNull('User'),
// 			args: {
// 				userId: nonNull(stringArg()),
// 			},
// 			resolve: (_, args, ctx) => {
// 				return ctx.prisma.user.delete({
// 					where: {
// 						id: args.userId,
// 					},
// 				});
// 			},
// 		});
// 	},
// });
