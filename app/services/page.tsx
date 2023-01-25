import ServicesList from '../(components)/servicesList';
import ContainerUI from '../(components)/UI/containerUI';

const ServicesPage = () => {
	return (
		<section id='services' className='isStick services bg-gray-400 p-4 pb-0'>
			<ContainerUI isHero={false}>
				<div className='flex flex-col'>
					<h2
						id='observed'
						className='text-4xl uppercase font-medium text-center text-white my-16 font-monoMajor'
					>
						My Services
					</h2>
					<div className='flex flex-wrap justify-center'>
						<ServicesList />
					</div>
				</div>
			</ContainerUI>
		</section>
	);
};

export default ServicesPage;
