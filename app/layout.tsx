import { Source_Code_Pro, Major_Mono_Display } from '@next/font/google';
import '../styles/globals.css';

type Props = {
	children: JSX.Element;
};

const sourceCodeFont = Source_Code_Pro({
	subsets: ['latin'],
	variable: '--font-source-code',
	display: 'optional',
});

const majorMonoFont = Major_Mono_Display({
	subsets: ['latin'],
	variable: '--font-major-mono-display',
	display: 'optional',
	weight: '400',
});

const Layout = ({ children }: Props) => {
	return (
		<html
			lang='en'
			className={`${sourceCodeFont.variable} ${majorMonoFont.variable}`}
		>
			<body className='font-monoCode h-screen'>
				<header
					id='header'
					className='bg-gray-800 p-4 w-full flex flex-col items-center md:flex-row md:justify-between h-min'
				>
					<h1 className='text-lg font-medium text-white'>codetechify.com</h1>
					<nav className='my-4 md:my-0 md:ml-4 flex flex-wrap flex-col md:flex-row md:justify-between w-full md:w-auto'>
						<div className='relative px-4 py-2 w-full md:w-36'>
							<a
								href='#home'
								className='bg-orange-600 rounded-lg px-4 py-2 block text-white text-center text-sm uppercase'
							>
								Home
							</a>
						</div>
						<div className='relative px-4 py-2 w-full md:w-36'>
							<a
								href='#services'
								className='bg-orange-600 rounded-lg px-4 py-2 block text-white text-center text-sm uppercase'
							>
								Service
							</a>
						</div>
						<div className='relative px-4 py-2 w-full md:w-36'>
							<a
								href='#skills'
								className='bg-orange-600 rounded-lg px-4 py-2 block text-white text-center text-sm uppercase w-full'
							>
								Skills
							</a>
						</div>
						<div className='relative px-4 py-2 w-full md:w-36'>
							<a
								href='#projects'
								className='bg-orange-600 rounded-lg px-4 py-2 block text-white text-center text-sm uppercase w-full'
							>
								Projects
							</a>
						</div>
					</nav>
				</header>
				{children}
			</body>
			<footer className='isStick bg-gray-800 text-white py-8'>
				<div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
					<div className='w-full md:w-1/3 text-center md:text-left'>
						<h3 className='text-lg font-medium mb-2'>Contechify</h3>
						<p className='text-sm'>
							Latest technology solutions for your business
						</p>
					</div>
					<div className='w-full md:w-1/3 text-center'>
						<h3 className='text-lg font-medium mb-2'>Navigation</h3>
						<ul className='text-sm'>
							<li className='mb-2'>
								<a href='#home' className='text-white hover:text-orange-500'>
									Home
								</a>
							</li>
							<li className='mb-2'>
								<a
									href='#services'
									className='text-white hover:text-orange-500'
								>
									Services
								</a>
							</li>
							<li className='mb-2'>
								<a href='#skills' className='text-white hover:text-orange-500'>
									Skills
								</a>
							</li>
							<li className='mb-2'>
								<a
									href='#projects'
									className='text-white hover:text-orange-500'
								>
									Projects
								</a>
							</li>
						</ul>
					</div>
					<div className='w-full md:w-1/3 text-center'>
						<h3 className='text-lg font-medium mb-2'>Contact</h3>
						<ul className='text-sm'>
							<li className='mb-2'>Email: codetechify@gmail.com</li>
							<li className='mb-2'>Phone: +123 456 789</li>
							<li className='mb-2'>Address: 1234 Example St, City, Country</li>
						</ul>
					</div>
				</div>
				<div className='container mx-auto text-center py-4'>
					<p className='text-xs'>
						Copyright ©2022 Contechify. All rights reserved.
					</p>
				</div>
			</footer>
		</html>
	);
};

export default Layout;
