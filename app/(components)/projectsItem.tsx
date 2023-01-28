import Link from 'next/link';
import Image from 'next/image';
import Button from './UI/button';

type Props = {
	project: {
		id: string;
		title: string;
		demoUrl: string;
		repoUrl: string;
		imageUrl: string;
		slug: string;
		user: {
			name: string;
		};
	};
};

const ProjectsItem = ({ project }: Props) => {
	const { id, title, demoUrl, repoUrl, imageUrl, slug, user } = project;
	return (
		<div
			key={id}
			className='bg-gray-700 rounded-lg shadow-md shadow-gray-700 flex flex-col basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 items-center p-4 m-4 transition-colors duration-300 ease-out h-fit'
		>
			<h3 className='text-2xl font-medium text-center text-white uppercase mb-2 hover:text-orange-600'>
				<Link href={`/projects/${slug}`}>{title}</Link>
			</h3>

			<p className='text-sm mb-2 text-white'>{user.name}</p>
			<Image src={imageUrl} width={640} height={480} alt={title} />
			<div className='flex flex-row w-full justify-between mt-4'>
				<Button navigateTo={demoUrl} variant='primary' small extern>
					Live Demo
				</Button>
				<Button navigateTo={repoUrl} variant='secondary' small inverted extern>
					Repository
				</Button>
			</div>
		</div>
	);
};

export default ProjectsItem;
