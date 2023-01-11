import { decorateType } from 'nexus';
import { GraphQLDateTime } from 'graphql-scalars';

export const GQLDate = decorateType(GraphQLDateTime, {
	sourceType: 'Date',
	asNexusMethod: 'date',
});

export * from './project';
export * from './user';
