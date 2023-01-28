type Props = {
	children: React.ReactNode;
	isHero: boolean;
};

const ContainerUI = ({ children, isHero }: Props) => {
	return (
		<div
			className={`container mx-auto flex flex-col justify-center items-center ${
				isHero && 'h-full'
			}`}
		>
			{children}
		</div>
	);
};

export default ContainerUI;
