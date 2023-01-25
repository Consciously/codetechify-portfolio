type Props = {
	children: React.ReactNode;
	isHero: boolean;
};

const ContainerUI = ({ children, isHero }: Props) => {
	return (
		<div
			className={`container mx-auto ${
				isHero && 'h-full flex flex-col justify-center items-center'
			}`}
		>
			{children}
		</div>
	);
};

export default ContainerUI;
