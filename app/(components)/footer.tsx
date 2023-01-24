const Footer = () => {
	return (
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
							<a href='#services' className='text-white hover:text-orange-500'>
								Services
							</a>
						</li>
						<li className='mb-2'>
							<a href='#skills' className='text-white hover:text-orange-500'>
								Skills
							</a>
						</li>
						<li className='mb-2'>
							<a href='#projects' className='text-white hover:text-orange-500'>
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
	);
};

export default Footer;
