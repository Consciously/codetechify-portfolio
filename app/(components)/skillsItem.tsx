type Props = {
	name: string;
};

const SkillsItem = ({ name }: Props) => {
	return (
		<div className='w-fit p-2'>
			<div className='bg-gray-800 rounded-lg p-2 flex flex-col'>
				<i className='fab fa-react text-orange-600 text-center mb-4 text-2xl'></i>
				<h3 className='text-lg font-medium text-center text-white mb-2'>
					{name}
				</h3>
			</div>
		</div>
	);
};

export default SkillsItem;
