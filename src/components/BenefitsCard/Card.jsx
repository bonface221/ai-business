import Rocket from "../../assets/rocket-icon.png";
import "./card.css";

function Card() {
	return (
		<div className="benefits-card">
			<img src={Rocket} alt="" />
			<div className="rocket d-flex justify-content-between">
				<p></p>
				<h3>A website done in record time.</h3>
			</div>

			<p>
				Lunch your AI-powered online business in record time with our platform,
				the all-in-one tool for speedy development.
			</p>
		</div>
	);
}

export default Card;
