type Props = {
	children: React.ReactNode;
};

const H3UI = ({ children }: Props) => {
	return (
		<h3 className='text-2xl font-medium text-center text-white uppercase mb-2 hover:text-orange-600'>
			{children}
		</h3>
	);
};

export default H3UI;
