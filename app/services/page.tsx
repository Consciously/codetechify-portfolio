const ServicesPage = () => {
	return (
		<section id='services' className='isStick services bg-gray-400 p-4 pb-0'>
			<div className='container mx-auto'>
				<div className='flex flex-col'>
					<h2
						id='observed'
						className='text-4xl uppercase font-medium text-center text-white my-16'
					>
						My Services
					</h2>
					<div className='flex flex-wrap justify-center'>
						<div className='bg-gray-700 hover:bg-orange-600 rounded-lg shadow-md shadow-gray-700 flex flex-col basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 items-center p-4 m-4 transition-colors duration-300 ease-out'>
							<h3 className='text-2xl font-medium text-center text-white uppercase mb-2'>
								Clean Code
							</h3>
							<figure className='bg-gray-400 flex justify-center items-center w-24 h-24 rounded-full p-5 my-4 sm:p-7 sm:my-6 md:p-6 md:my-5 lg:p-9 lg:my-8 ring-6'>
								<i className='fas fa-code text-orange-600 text-center text-4xl'></i>
							</figure>
							<p className='text-sm lg:text-lg text-center text-white'>
								We write clean, maintainable and scalable code to ensure the
								longevity of your project.
							</p>
						</div>
						<div className='bg-gray-700 hover:bg-orange-600 rounded-lg shadow-md shadow-gray-700 flex flex-col basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 items-center p-4 m-4 transition-colors duration-300 ease-out'>
							<h3 className='text-2xl font-medium text-center text-white uppercase mb-2'>
								Type Safety
							</h3>
							<figure className='bg-gray-400 flex justify-center items-center w-24 h-24 rounded-full p-5 my-4 sm:p-7 sm:my-6 md:p-6 md:my-5 lg:p-9 lg:my-8 ring-6'>
								<i className='fas fa-file-code text-orange-600 text-center text-4xl'></i>
							</figure>
							<p className='text-sm lg:text-lg text-center text-white'>
								We offer type safety services for your projects using
								TypeScript, ensuring maintainable, readable and scalable code by
								catching errors and bugs early on with strict type checking.
							</p>
						</div>
						<div className='bg-gray-700 hover:bg-orange-600 rounded-lg shadow-md shadow-gray-700 flex flex-col basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 items-center p-4 m-4 transition-colors duration-300 ease-out'>
							<h3 className='text-2xl font-medium text-center text-white uppercase mb-2'>
								Testing
							</h3>
							<figure className='bg-gray-400 flex justify-center items-center w-24 h-24 rounded-full p-5 my-4 sm:p-7 sm:my-6 md:p-6 md:my-5 lg:p-9 lg:my-8 ring-6'>
								<i className='fas fa-check-square text-orange-600 text-center text-4xl'></i>
							</figure>
							<p className='text-sm lg:text-lg text-center text-white'>
								We write comprehensive tests to ensure the reliability and
								stability of your project.
							</p>
						</div>
						<div className='bg-gray-700 hover:bg-orange-600 rounded-lg shadow-md shadow-gray-700 flex flex-col basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 items-center p-4 m-4 transition-colors duration-300 ease-out'>
							<h3 className='text-2xl font-medium text-center text-white uppercase mb-2'>
								Latest Web Technology
							</h3>
							<figure className='bg-gray-400 flex justify-center items-center w-24 h-24 rounded-full p-5 my-4 sm:p-7 sm:my-6 md:p-6 md:my-5 lg:p-9 lg:my-8 ring-6'>
								<i className='fas fa-globe text-orange-600 text-center text-4xl'></i>
							</figure>
							<p className='text-sm lg:text-lg text-center text-white'>
								We stay up-to-date with the latest web technologies to ensure
								that your project is at the cutting edge of the industry.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicesPage;
