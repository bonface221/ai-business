import Hero from "../HeroSection/Hero";
import Projects from "../Projects/Projects";
import "./home.css";

function Home() {
	return (
		<div className="home">
			<Hero />

			<Projects />
		</div>
	);
}

export default Home;
