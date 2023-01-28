type Props = {
	children: React.ReactNode;
	isHero?: boolean;
};

const FlexColUI = ({ children, isHero }: Props) => {
	return (
		<div
			className={`flex flex-col justify-center items-center ${
				isHero && 'h-full'
			}`}
		>
			{children}
		</div>
	);
};

export default FlexColUI;
