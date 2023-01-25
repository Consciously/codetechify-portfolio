import ServicesList from '../(components)/servicesList';
import ContainerUI from '../(components)/UI/containerUI';
import FlexColUI from '../(components)/UI/flexColUI';
import FlexItemsUI from '../(components)/UI/flexItemsUI';
import H2UI from '../(components)/UI/h2UI';

const ServicesPage = () => {
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

export default ServicesPage;
