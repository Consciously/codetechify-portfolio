type Props = {
	children: React.ReactNode;
};

const CardUI = ({ children }: Props) => {
	return (
		<div className='bg-gray-800 rounded-lg shadow-md shadow-gray-700 flex flex-col basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 items-center flex-auto xl:flex-initial p-4 pb-0 m-4 transition-colors duration-300 ease-out h-full'>
			{children}
		</div>
	);
};

export default CardUI;
