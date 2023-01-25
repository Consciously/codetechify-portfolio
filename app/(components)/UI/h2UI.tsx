type Props = {
	children: React.ReactNode;
};

const H2UI = ({ children }: Props) => {
	return (
		<h2 className='text-4xl uppercase font-medium text-center text-white my-16 font-monoMajor'>
			{children}
		</h2>
	);
};

export default H2UI;
