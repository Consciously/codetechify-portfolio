import HeroPage from './hero/page';
import ServicesPage from './services/page';
import SkillsPage from './skills/page';
import ProjectsPage from './projects/page';

const HomePage = () => {
	return (
		<>
			<HeroPage />
			<ServicesPage />
			<SkillsPage />
			<ProjectsPage />
		</>
	);
};

export default HomePage;
