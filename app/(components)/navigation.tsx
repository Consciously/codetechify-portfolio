import { Fragment } from 'react';
import jsonData from '../../data/jsonData.json';
import Button from './UI/button';

const Navigation = () => {
	const { navigation } = jsonData;

	return (
		<nav className='my-4 md:my-0 md:ml-4 flex flex-wrap flex-col md:flex-row md:justify-between w-full md:w-auto'>
			{navigation.map((navElem, idx) => {
				return (
					<Fragment key={idx}>
						<div className='relative px-4 py-2 w-full md:w-36'>
							<Button navigateTo='/' variant='primary' small={true}>
								Admin
							</Button>
						</div>
					</Fragment>
				);
			})}
		</nav>
	);
};

export default Navigation;
