import ServicesList from '../(components)/servicesList';
import ContainerUI from '../(components)/UI/containerUI';
import FlexColUI from '../(components)/UI/flexColUI';
import FlexItemsUI from '../(components)/UI/flexItemsUI';
import H2UI from '../(components)/UI/h2UI';
import SectionUI from '../(components)/UI/sectionUI';

const ServicesPage = () => {
	return (
		<SectionUI>
			<ContainerUI>
				<FlexColUI>
					<H2UI>My Services</H2UI>
					<FlexItemsUI>
						<ServicesList />
					</FlexItemsUI>
				</FlexColUI>
			</ContainerUI>
		</SectionUI>
	);
};

export default ServicesPage;
