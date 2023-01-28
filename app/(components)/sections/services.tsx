import ServicesList from '../servicesList';
import ContainerUI from '../UI/containerUI';
import FlexColUI from '../UI/flexColUI';
import FlexItemsUI from '../UI/flexItemsUI';
import H2UI from '../UI/h2UI';
import SectionUI from '../UI/sectionUI';

const Services = () => {
	return (
		<SectionUI>
			<ContainerUI>
				<FlexColUI>
					<H2UI>My Services</H2UI>
					<FlexItemsUI hasBorder={false}>
						<ServicesList />
					</FlexItemsUI>
				</FlexColUI>
			</ContainerUI>
		</SectionUI>
	);
};

export default Services;
