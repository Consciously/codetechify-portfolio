import { makeSchema } from 'nexus';
import { join } from 'path';
import * as types from '../schema';

export const schema = makeSchema({
	types,
	outputs: {
		typegen: join(process.cwd(), 'generated', 'nexus-typegen.ts'),
		schema: join(process.cwd(), 'generated', 'schema.graphql'),
	},
	contextType: {
		export: 'Context',
		module: join(process.cwd(), 'lib', 'context.ts'),
	},
});
