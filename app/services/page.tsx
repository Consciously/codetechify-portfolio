import { FaCode, FaFileCode, FaCheckSquare, FaGlobe } from 'react-icons/fa';
import jsonData from '../../data/jsonData.json';

const icons = [FaCode, FaFileCode, FaCheckSquare, FaGlobe];

const ServicesPage = () => {
	const { services } = jsonData;

	return (
		<section id='services' className='isStick services bg-gray-400 p-4 pb-0'>
			<div className='container mx-auto'>
				<div className='flex flex-col'>
					<h2
						id='observed'
						className='text-4xl uppercase font-medium text-center text-white my-16 font-monoMajor'
					>
						My Services
					</h2>
					<div className='flex flex-wrap justify-center'>
						{services.map((service, idx) => {
							const Icon = icons[idx];

							return (
								<div
									key={idx}
									className='bg-gray-700 hover:bg-orange-600 rounded-lg shadow-md shadow-gray-700 flex flex-col basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 items-center p-4 m-4 transition-colors duration-300 ease-out'
								>
									<h3 className='text-2xl font-medium text-center text-white uppercase mb-2'>
										{service.title}
									</h3>
									<figure className='bg-gray-400 flex justify-center items-center w-24 h-24 rounded-full p-5 my-4 sm:p-7 sm:my-6 md:p-6 md:my-5 lg:p-9 lg:my-8 ring-6'>
										<Icon className='text-orange-600 text-center text-4xl' />
									</figure>
									<p className='text-sm lg:text-lg text-center text-white'>
										{service.text}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicesPage;
