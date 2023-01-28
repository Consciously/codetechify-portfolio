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
					<Button navigateTo='/projects' variant='primary' small={false}>
						Go to projects
					</Button>
				</FlexColUI>
			</ContainerUI>
		</SectionUI>
	);
};

export default ProjectsExcerpt;
