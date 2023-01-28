import Navigation from './navigation';

const Header = () => {
	return (
		<header
			id='header'
			className='bg-gray-800 p-4 w-full flex flex-col items-center md:flex-row md:justify-between h-1/6'
		>
			<h1 className='text-lg font-medium text-white'>codetechify.com</h1>
			<Navigation />
		</header>
	);
};

export default Header;
