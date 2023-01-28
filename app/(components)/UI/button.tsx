import Link from 'next/link';

type Props = {
	children: React.ReactNode;
	navigateTo: string;
	variant: string;
	small?: boolean;
	inverted?: boolean;
	extern?: boolean;
};

const Button = ({
	children,
	navigateTo,
	variant,
	small,
	inverted,
	extern,
}: Props) => {
	return (
		<div
			className={`${
				variant === 'primary'
					? 'bg-orange-600 hover:bg-orange-700'
					: variant === 'secondary'
					? 'bg-gray-800 hover:bg-gray-900'
					: ''
			} rounded-lg  ${small ? 'px-4 py-2' : 'px-8 py-4'} ${
				inverted && 'bg-gray-400 hover:bg-gray-500 text-gray-800'
			} mb-4 block text-white text-center capitalize  transition-colors duration-500`}
		>
			{' '}
			{extern ? (
				<a href={navigateTo}>{children} &rarr;</a>
			) : (
				<Link href={navigateTo}>{children}</Link>
			)}
		</div>
	);
};

export default Button;
