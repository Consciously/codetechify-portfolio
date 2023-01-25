import { FaCode, FaFileCode, FaCheckSquare, FaGlobe } from 'react-icons/fa';
import { text } from 'stream/consumers';
import jsonData from '../../data/jsonData.json';
import ServicesItem from './servicesItem';

const icons = [FaCode, FaFileCode, FaCheckSquare, FaGlobe];

const ServicesList = () => {
	const { services } = jsonData;

	return (
		<>
			{services.map((service, idx) => {
				const icon = icons[idx];

				return (
					<ServicesItem
						key={idx}
						Icon={icon}
						text={service.text}
						title={service.title}
					/>
				);
			})}
		</>
	);
};

export default ServicesList;
