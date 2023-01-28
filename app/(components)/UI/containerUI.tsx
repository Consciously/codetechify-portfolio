type Props = {
	children: React.ReactNode;
};

const ContainerUI = ({ children }: Props) => {
	return <div className='container mx-auto h-full'>{children}</div>;
};

export default ContainerUI;
