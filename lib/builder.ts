import { makeSchema } from 'nexus';
import { join } from 'path';
import * as types from '../schema';

export const schema = makeSchema({
	types,
	outputs: {
		typegen: join(
			process.cwd(),
			'node_modules',
			'@types',
			'nexus-typegen',
			'index.d.ts',
		),
		schema: join(process.cwd(), 'graphql', 'schema.graphql'),
	},
	contextType: {
		export: 'Context',
		module: join(process.cwd(), 'lib', 'context.ts'),
	},
});
