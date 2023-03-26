import Hero from "../HeroSection/Hero";
import Projects from "../Projects/Projects";
import VideoOverlay from "../../assets/lightbox.png";
import "./home.css";

function Home() {
	return (
		<div className="home">
			<Hero />
			<div className="overlay">
				<img className="img-fluid" src={VideoOverlay} alt="" />
			</div>

			<Projects />
		</div>
	);
}

export default Home;
