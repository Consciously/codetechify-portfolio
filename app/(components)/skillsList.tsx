import jsonData from '../../data/jsonData.json';
import SkillsItem from './skillsItem';

const SkillsList = () => {
	const { skills } = jsonData;

	return (
		<>
			{skills.map((skill, idx) => {
				return <SkillsItem key={idx} name={skill.name} />;
			})}
		</>
	);
};

export default SkillsList;
