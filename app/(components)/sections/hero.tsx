import Image from 'next/image';
import ContainerUI from '../UI/containerUI';
import profilePic from '../../../public/images/me.jpg';
import Button from '../UI/button';

const Hero = () => {
	return (
		<section className='hero bg-gray-800 text-white text-center py-16 h-full'>
			<ContainerUI isHero={true}>
				<h1 className='text-5xl font-medium mb-8 uppercase font-monoMajor'>
					Welcome to Codetechify
				</h1>
				<div className='flex flex-col lg:flex-row w-full lg:w-1/2'>
					<p className='text-lg mt-4 mb-8 w-full lg:w-4/5 order-2'>
						I provide the latest technology solutions for your business. I am as
						an expert are dedicated to delivering top-notch solutions to help
						your business grow and succeed in the digital age.
					</p>
					<figure className='mb-4 order-1 w-fit lg:w-1/4 self-center'>
						<Image
							className='w-fit h-auto rounded-md'
							src={profilePic}
							alt='Picture of site owner'
						/>
					</figure>
				</div>

				<Button navigateTo='/' variant='primary'>
					Contact Me
				</Button>
			</ContainerUI>
		</section>
	);
};

export default Hero;
