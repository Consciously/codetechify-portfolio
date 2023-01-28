import Link from 'next/link';
import Image from 'next/image';
import Button from './UI/button';
import H3UI from './UI/h3UI';
import CardUI from './UI/cardUI';

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
	const { title, demoUrl, repoUrl, imageUrl, slug, user } = project;
	return (
		<CardUI>
			<H3UI>
				<Link href={`/projects/${slug}`}>{title}</Link>
			</H3UI>

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
		</CardUI>
	);
};

export default ProjectsItem;
