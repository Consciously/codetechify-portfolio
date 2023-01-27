import Image from 'next/image';
import Link from 'next/link';
import jsonData from '../../data/jsonData.json';
import ContainerUI from '../(components)/UI/containerUI';
import FlexColUI from '../(components)/UI/flexColUI';
import FlexItemsUI from '../(components)/UI/flexItemsUI';
import H2UI from '../(components)/UI/h2UI';

type Project = {
	id: string;
	title: string;
	slug: string;
	demoUrl: string;
	repoUrl: string;
	imageUrl: string;
	user: {
		name: string;
	};
};

const ProjectsPage = () => {
	const { getAllProjects } = jsonData;

	const projectExcerpt = getAllProjects
		.slice()
		.sort(() => Math.random() - 0.5)
		.slice(0, 4);

	return (
		<section id='projects' className='isStick projects bg-gray-400 p-4 pb-0'>
			<ContainerUI isHero={false}>
				<FlexColUI>
					<H2UI>My Projects</H2UI>
					<FlexItemsUI hasBorder={false}>
						{projectExcerpt.map(
							({
								id,
								title,
								slug,
								demoUrl,
								repoUrl,
								imageUrl,
								user,
							}: Project) => {
								return (
									<div
										key={id}
										className='bg-gray-700 rounded-lg shadow-md shadow-gray-700 flex flex-col basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 items-center p-4 m-4 transition-colors duration-300 ease-out h-fit'
									>
										<h3 className='text-2xl font-medium text-center text-white uppercase mb-2 hover:text-orange-600'>
											<Link href={`/projects/${slug}`}>{title}</Link>
										</h3>

										<p className='text-sm mb-2 text-white'>{user.name}</p>
										<Image
											src={imageUrl}
											width={640}
											height={480}
											alt={title}
										/>
										<div className='flex flex-row w-full justify-between mt-4'>
											<a
												href={`${demoUrl}`}
												className='bg-orange-500 rounded-lg px-4 py-2 block text-white text-center'
											>
												Live Demo
											</a>
											<a
												href={`${repoUrl}`}
												className='bg-orange-500 rounded-lg px-4 py-2 block text-white text-center'
											>
												Repository
											</a>
										</div>
									</div>
								);
							},
						)}
					</FlexItemsUI>
				</FlexColUI>
			</ContainerUI>
		</section>
	);
};

export default ProjectsPage;
