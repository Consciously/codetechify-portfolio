import ProjectsList from '../../(components)/projectsList';
import ContainerUI from '../../(components)/UI/containerUI';
import FlexColUI from '../../(components)/UI/flexColUI';
import FlexItemsUI from '../../(components)/UI/flexItemsUI';
import H2UI from '../../(components)/UI/h2UI';
import SectionUI from '../../(components)/UI/sectionUI';

const ProjectsPage = () => {
	return (
		<SectionUI>
			<ContainerUI>
				<FlexColUI>
					<H2UI>My Projects</H2UI>
					<FlexItemsUI hasBorder={false}>
						<ProjectsList isExcerpt={false} />
					</FlexItemsUI>
				</FlexColUI>
			</ContainerUI>
		</SectionUI>
	);
};

export default ProjectsPage;
