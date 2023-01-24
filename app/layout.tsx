import { Source_Code_Pro, Major_Mono_Display } from '@next/font/google';
import '../styles/globals.css';
import Header from './(components)/header';
import Footer from './(components)/footer';

type Props = {
	children: React.ReactNode;
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
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
};

export default Layout;
