import ContainerUI from '../(components)/UI/containerUI';

const HeroPage = () => {
	return (
		<section className='hero bg-gray-800 text-white text-center py-16 h-full'>
			<ContainerUI isHero={true}>
				<h1 className='text-5xl font-medium mb-8 uppercase font-monoMajor'>
					Welcome to Contechify
				</h1>
				<div className='flex flex-col lg:flex-row w-full lg:w-1/2'>
					<p className='text-lg mt-4 mb-8 w-full lg:w-4/5 order-2'>
						I provide the latest technology solutions for your business. I am as
						an expert are dedicated to delivering top-notch solutions to help
						your business grow and succeed in the digital age.
					</p>
					<figure className='mb-4 order-1 w-fit lg:w-1/5 self-center'>
						<img
							className='w-fit h-auto rounded-md'
							src='/images/me.jpg'
							alt='hero image'
						/>
					</figure>
				</div>

				<a
					href='#'
					className='bg-orange-600 rounded-lg px-8 py-4 block text-white'
				>
					Learn More
				</a>
			</ContainerUI>
		</section>
	);
};

export default HeroPage;
