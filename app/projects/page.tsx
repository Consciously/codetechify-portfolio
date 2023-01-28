import ProjectsList from '../(components)/projectsList';
import ContainerUI from '../(components)/UI/containerUI';
import FlexColUI from '../(components)/UI/flexColUI';
import FlexItemsUI from '../(components)/UI/flexItemsUI';
import H2UI from '../(components)/UI/h2UI';

const ProjectsPage = () => {
	return (
		<section id='projects' className='isStick projects bg-gray-400 p-4 pb-0'>
			<ContainerUI isHero={false}>
				<FlexColUI>
					<H2UI>My Projects</H2UI>
					<FlexItemsUI hasBorder={false}>
						<ProjectsList isExcerpt={false} />
					</FlexItemsUI>
				</FlexColUI>
			</ContainerUI>
		</section>
	);
};

export default ProjectsPage;
