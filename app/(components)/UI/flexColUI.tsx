type Props = {
	children: React.ReactNode;
};

const FlexColUI = ({ children }: Props) => {
	return <div className='flex flex-col'>{children}</div>;
};

export default FlexColUI;
