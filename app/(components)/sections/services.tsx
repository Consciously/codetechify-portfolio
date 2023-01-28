import ServicesList from '../servicesList';
import ContainerUI from '../UI/containerUI';
import FlexColUI from '../UI/flexColUI';
import FlexItemsUI from '../UI/flexItemsUI';
import H2UI from '../UI/h2UI';

const Services = () => {
	return (
		<section id='services' className='isStick services bg-gray-400 p-4 pb-0'>
			<ContainerUI isHero={false}>
				<FlexColUI>
					<H2UI>My Services</H2UI>
					<FlexItemsUI hasBorder={false}>
						<ServicesList />
					</FlexItemsUI>
				</FlexColUI>
			</ContainerUI>
		</section>
	);
};

export default Services;
