import ProjectsList from '../projectsList';
import Button from '../UI/button';
import ContainerUI from '../UI/containerUI';
import FlexColUI from '../UI/flexColUI';
import FlexItemsUI from '../UI/flexItemsUI';
import H2UI from '../UI/h2UI';

const ProjectsExcerpt = () => {
	return (
		<section id='projects' className='isStick projects bg-gray-400 p-4 pb-0'>
			<ContainerUI isHero={false}>
				<FlexColUI>
					<H2UI>My Projects</H2UI>
					<FlexItemsUI hasBorder={false}>
						<ProjectsList isExcerpt={true} />
					</FlexItemsUI>
				</FlexColUI>
				<Button navigateTo='/projects' variant='primary' small={false}>
					Go to projects
				</Button>
			</ContainerUI>
		</section>
	);
};

export default ProjectsExcerpt;
