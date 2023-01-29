import { objectType, extendType } from 'nexus';
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
