import { use, Suspense, Fragment } from 'react';
import { getAllProjects } from '../../lib/getData';
import ProjectsItem from './projectsItem';
import Spinner from './UI/spinner';

type Props = {
	isExcerpt: boolean;
};

const ProjectsList = ({ isExcerpt }: Props) => {
	const projects = use(getAllProjects());

	const projectsExcerpt = projects
		.slice()
		.sort(() => Math.random() - 0.5)
		.slice(0, 4);

	return (
		<>
			{isExcerpt
				? projectsExcerpt.map(project => {
						return (
							<Fragment key={project.id}>
								<Suspense fallback={<Spinner />}>
									<ProjectsItem project={project} />
								</Suspense>
							</Fragment>
						);
				  })
				: projects.map(project => {
						return (
							<Fragment key={project.id}>
								<Suspense fallback={<Spinner />}>
									<ProjectsItem project={project} />
								</Suspense>
							</Fragment>
						);
				  })}
		</>
	);
};

export default ProjectsList;
