import type { IconType } from 'react-icons';

type Props = {
	title: string;
	Icon: IconType;
	text: string;
};

const ServicesItem = ({ title, Icon, text }: Props) => {
	return (
		<div className='bg-gray-700 hover:bg-orange-600 rounded-lg shadow-md shadow-gray-700 flex flex-col basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 items-center p-4 m-4 transition-colors duration-300 ease-out'>
			<h3 className='text-2xl font-medium text-center text-white uppercase mb-2'>
				{title}
			</h3>
			<figure className='bg-gray-400 flex justify-center items-center w-24 h-24 rounded-full p-5 my-4 sm:p-7 sm:my-6 md:p-6 md:my-5 lg:p-9 lg:my-8 ring-6'>
				<Icon className='text-orange-600 text-center text-4xl' />
			</figure>
			<p className='text-sm lg:text-lg text-center text-white'>{text}</p>
		</div>
	);
};

export default ServicesItem;
