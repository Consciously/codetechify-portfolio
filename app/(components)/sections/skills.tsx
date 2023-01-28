import SkillsList from '../skillsList';
import ContainerUI from '../UI/containerUI';
import FlexColUI from '../UI/flexColUI';
import FlexItemsUI from '../UI/flexItemsUI';
import H2UI from '../UI/h2UI';
import SectionUI from '../UI/sectionUI';

const Skills = () => {
	return (
		<SectionUI>
			<ContainerUI>
				<FlexColUI>
					<H2UI>My Skills</H2UI>
					<FlexItemsUI hasBorder={true}>
						<SkillsList />
					</FlexItemsUI>
				</FlexColUI>
			</ContainerUI>
		</SectionUI>
	);
};

export default Skills;
