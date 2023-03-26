import { useState, useEffect } from "react";
import { ReactComponent as Play } from "../../assets/play.svg";
import Navbar from "../Navbar/Navbar";
import videoPlaceholder from "../../assets/lightbox.png";
import "./hero.css";

function Hero() {
	const [fullWidth, setFullWidth] = useState("container");

	useEffect(() => {
		const handleResize = () => {
			setFullWidth(window.innerWidth <= 991 ? "container-fluid" : "container");
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="hero">
			<div className={`hero__all ${fullWidth}`}>
				<Navbar />
				<div className="hero__text text-center px-1 mt-3">
					<p>AI Profit Genius, mode for AI business entrepreneurs.</p>
					<h3>
						Get your AI Business <br /> Up and running <br />
						<span>in a Matter of days.</span>
					</h3>
					<div className="hero__btns mt-4 d-flex justify-content-center gap-4 flex-wrap">
						<button className="hero__btn1 btn">
							Join AI business Club(Advanced Use)
						</button>
						<button className="hero__btn2 btn d-flex align-items-center gap-1 justify-content-center">
							<Play className="hero__icon" /> Try out for Free
						</button>
					</div>
					<p className="mt-4">No credit card required.</p>
					<div className="video-overlay">
						<img src={videoPlaceholder} className="img-fluid" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
