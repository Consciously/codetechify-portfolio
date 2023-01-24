import { Fragment } from 'react';
import Link from 'next/link';
import { navigation } from '../../data';

const Navigation = () => {
	return (
		<nav className='my-4 md:my-0 md:ml-4 flex flex-wrap flex-col md:flex-row md:justify-between w-full md:w-auto'>
			{navigation.map((navElem, idx) => {
				return (
					<Fragment key={idx}>
						<div className='relative px-4 py-2 w-full md:w-36'>
							<Link
								href={`${navElem.linkUrl}`}
								className='bg-orange-600 rounded-lg px-4 py-2 block text-white text-center text-sm uppercase'
							>
								{`${navElem.linkName}`}
							</Link>
						</div>
					</Fragment>
				);
			})}
		</nav>
	);
};

export default Navigation;
