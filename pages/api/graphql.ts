import { createYoga } from 'graphql-yoga';
import type { NextApiRequest, NextApiResponse } from 'next';
import { schema } from '../../lib/builder';
import { createContext } from '../../lib/context';

export const config = {
	api: {
		bodyParser: false,
	},
};

export default createYoga<{ req: NextApiRequest; res: NextApiResponse }>({
	context: createContext,
	schema,
	graphqlEndpoint: '/api/graphql',
});
