import SkillsList from '../skillsList';
import ContainerUI from '../UI/containerUI';
import FlexColUI from '../UI/flexColUI';
import FlexItemsUI from '../UI/flexItemsUI';
import H2UI from '../UI/h2UI';

const Skills = () => {
	return (
		<section id='skills' className='isStick skills bg-gray-400 p-4 pb-0'>
			<ContainerUI isHero={false}>
				<FlexColUI>
					<H2UI>My Skills</H2UI>
					<FlexItemsUI hasBorder={true}>
						<SkillsList />
					</FlexItemsUI>
				</FlexColUI>
			</ContainerUI>
		</section>
	);
};

export default Skills;
