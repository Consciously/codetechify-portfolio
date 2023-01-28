import Hero from './(components)/sections/hero';
import Services from './(components)/sections/services';
import Skills from './(components)/sections/skills';
import ProjectsExcerpt from './(components)/sections/projectsExcerpt';

const HomePage = () => {
	return (
		<>
			<Hero />
			<Services />
			<Skills />
			<ProjectsExcerpt />
		</>
	);
};

export default HomePage;
