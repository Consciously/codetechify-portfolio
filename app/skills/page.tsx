import SkillsList from '../(components)/skillsList';
import ContainerUI from '../(components)/UI/containerUI';

const SkillsPage = () => {
	return (
		<section id='skills' className='isStick skills bg-gray-400 p-4 pb-0'>
			<ContainerUI isHero={false}>
				<div className='flex flex-col'>
					<h2 className='text-4xl uppercase font-medium text-center text-white my-16'>
						My Skills
					</h2>
					<div className='flex flex-wrap border-4 border-orange-600 rounded-xl p-4'>
						<SkillsList />
					</div>
				</div>
			</ContainerUI>
		</section>
	);
};

export default SkillsPage;
