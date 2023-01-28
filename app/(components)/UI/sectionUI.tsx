type Props = {
	children: React.ReactNode;
	isHero?: boolean;
};

const SectionUI = ({ children, isHero }: Props) => {
	return (
		<>
			{isHero ? (
				<section className='bg-gray-800 text-white p-4 h-5/6'>
					{children}
				</section>
			) : (
				<section className='bg-gray-400 text-white p-4 pb-0'>
					{children}
				</section>
			)}
		</>
	);
};

export default SectionUI;
