type Props = {
	children?: React.ReactNode;
	hasBorder?: boolean;
};

const FlexItemsUI = ({ children, hasBorder }: Props) => {
	return (
		<div
			className={`flex flex-wrap justify-center ${
				hasBorder && 'border-4 border-orange-600 rounded-xl p-4'
			}`}
		>
			{children}
		</div>
	);
};

export default FlexItemsUI;
