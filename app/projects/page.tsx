import ContainerUI from '../(components)/UI/containerUI';
import FlexColUI from '../(components)/UI/flexColUI';
import FlexItemsUI from '../(components)/UI/flexItemsUI';
import H2UI from '../(components)/UI/h2UI';

const ProjectsPage = () => {
	return (
		<section id='projects' className='isStick projects bg-gray-400 p-4 pb-0'>
			<ContainerUI isHero={false}>
				<FlexColUI>
					<H2UI>My Projects</H2UI>
					<FlexItemsUI hasBorder={false}>
						<div className='bg-gray-700 hover:bg-orange-600 rounded-lg shadow-md shadow-gray-700 flex flex-col basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 items-center p-4 m-4 transition-colors duration-300 ease-out'>
							<h3 className='text-2xl font-medium text-center text-white uppercase mb-2'>
								Project Title
							</h3>
							<p className='text-sm mb-2 text-white'>Project Owner</p>
							<img
								src='https://picsum.photos/200/300?grayscale'
								alt='project image'
								className='mb-4'
							/>
							<div className='flex flex-row w-full justify-between'>
								<a
									href='#'
									className='bg-orange-500 rounded-lg px-4 py-2 block text-white text-center'
								>
									Live Demo
								</a>
								<a
									href='#'
									className='bg-orange-500 rounded-lg px-4 py-2 block text-white text-center'
								>
									Repository
								</a>
							</div>
						</div>
						<div className='bg-gray-700 hover:bg-orange-600 rounded-lg shadow-md shadow-gray-700 flex flex-col basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 items-center p-4 m-4 transition-colors duration-300 ease-out'>
							<h3 className='text-2xl font-medium text-center text-white uppercase mb-2'>
								Project Title
							</h3>
							<p className='text-sm mb-2 text-white'>Project Owner</p>
							<img
								src='https://picsum.photos/200/300?grayscale'
								alt='project image'
								className='mb-4'
							/>
							<div className='flex flex-row w-full justify-between'>
								<a
									href='#'
									className='bg-orange-500 rounded-lg px-4 py-2 block text-white text-center'
								>
									Live Demo
								</a>
								<a
									href='#'
									className='bg-orange-500 rounded-lg px-4 py-2 block text-white text-center'
								>
									Repository
								</a>
							</div>
						</div>
						<div className='bg-gray-700 hover:bg-orange-600 rounded-lg shadow-md shadow-gray-700 flex flex-col basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 items-center p-4 m-4 transition-colors duration-300 ease-out'>
							<h3 className='text-2xl font-medium text-center text-white uppercase mb-2'>
								Project Title
							</h3>
							<p className='text-sm mb-2 text-white'>Project Owner</p>
							<img
								src='https://picsum.photos/200/300?grayscale'
								alt='project image'
								className='mb-4'
							/>
							<div className='flex flex-row w-full justify-between'>
								<a
									href='#'
									className='bg-orange-500 rounded-lg px-4 py-2 block text-white text-center'
								>
									Live Demo
								</a>
								<a
									href='#'
									className='bg-orange-500 rounded-lg px-4 py-2 block text-white text-center'
								>
									Repository
								</a>
							</div>
						</div>
						<div className='bg-gray-700 hover:bg-orange-600 rounded-lg shadow-md shadow-gray-700 flex flex-col basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 items-center p-4 m-4 transition-colors duration-300 ease-out'>
							<h3 className='text-2xl font-medium text-center text-white uppercase mb-2'>
								Project Title
							</h3>
							<p className='text-sm mb-2 text-white'>Project Owner</p>
							<img
								src='https://picsum.photos/200/300?grayscale'
								alt='project image'
								className='mb-4'
							/>
							<div className='flex flex-row w-full justify-between'>
								<a
									href='#'
									className='bg-orange-500 rounded-lg px-4 py-2 block text-white text-center'
								>
									Live Demo
								</a>
								<a
									href='#'
									className='bg-orange-500 rounded-lg px-4 py-2 block text-white text-center'
								>
									Repository
								</a>
							</div>
						</div>
						<div className='bg-gray-700 hover:bg-orange-600 rounded-lg shadow-md shadow-gray-700 flex flex-col basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 items-center p-4 m-4 transition-colors duration-300 ease-out'>
							<h3 className='text-2xl font-medium text-center text-white uppercase mb-2'>
								Project Title
							</h3>
							<p className='text-sm mb-2 text-white'>Project Owner</p>
							<img
								src='https://picsum.photos/200/300?grayscale'
								alt='project image'
								className='mb-4'
							/>
							<div className='flex flex-row w-full justify-between'>
								<a
									href='#'
									className='bg-orange-500 rounded-lg px-4 py-2 block text-white text-center'
								>
									Live Demo
								</a>
								<a
									href='#'
									className='bg-orange-500 rounded-lg px-4 py-2 block text-white text-center'
								>
									Repository
								</a>
							</div>
						</div>
						<div className='bg-gray-700 hover:bg-orange-600 rounded-lg shadow-md shadow-gray-700 flex flex-col basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 items-center p-4 m-4 transition-colors duration-300 ease-out'>
							<h3 className='text-2xl font-medium text-center text-white uppercase mb-2'>
								Project Title
							</h3>
							<p className='text-sm mb-2 text-white'>Project Owner</p>
							<img
								src='https://picsum.photos/200/300?grayscale'
								alt='project image'
								className='mb-4'
							/>
							<div className='flex flex-row w-full justify-between'>
								<a
									href='#'
									className='bg-orange-500 rounded-lg px-4 py-2 block text-white text-center'
								>
									Live Demo
								</a>
								<a
									href='#'
									className='bg-orange-500 rounded-lg px-4 py-2 block text-white text-center'
								>
									Repository
								</a>
							</div>
						</div>
					</FlexItemsUI>
				</FlexColUI>
			</ContainerUI>
		</section>
	);
};

export default ProjectsPage;
