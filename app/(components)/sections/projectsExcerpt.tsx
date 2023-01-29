import ProjectsList from '../projectsList';
import Button from '../UI/button';
import ContainerUI from '../UI/containerUI';
import FlexColUI from '../UI/flexColUI';
import FlexItemsUI from '../UI/flexItemsUI';
import H2UI from '../UI/h2UI';
import SectionUI from '../UI/sectionUI';

const ProjectsExcerpt = () => {
	return (
		<SectionUI>
			<ContainerUI>
				<FlexColUI>
					<H2UI>My Projects</H2UI>
					<FlexItemsUI hasBorder={false}>
						<ProjectsList isExcerpt={true} />
					</FlexItemsUI>
					<div className='flex flex-col w-48 justify-between mt-16'>
						<Button navigateTo='/projects' variant='primary'>
							Go to project
						</Button>
					</div>
				</FlexColUI>
			</ContainerUI>
		</SectionUI>
	);
};

export default ProjectsExcerpt;
