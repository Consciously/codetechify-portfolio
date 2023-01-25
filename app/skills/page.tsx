import SkillsList from '../(components)/skillsList';
import ContainerUI from '../(components)/UI/containerUI';
import FlexColUI from '../(components)/UI/flexColUI';
import FlexItemsUI from '../(components)/UI/flexItemsUI';
import H2UI from '../(components)/UI/h2UI';

const SkillsPage = () => {
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

export default SkillsPage;
