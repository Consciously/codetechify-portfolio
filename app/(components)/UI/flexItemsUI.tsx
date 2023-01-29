type Props = {
	children?: React.ReactNode;
	hasBorder?: boolean;
	isSidebar?: boolean;
};

const FlexItemsUI = ({ children, hasBorder, isSidebar }: Props) => {
	return (
		<div
			className={`flex ${
				isSidebar && 'flex-col xl:w-full'
			} flex-wrap justify-center ${
				hasBorder && 'border-4 border-orange-600 rounded-xl p-4'
			}`}
		>
			{children}
		</div>
	);
};

export default FlexItemsUI;
