import T1 from "../../assets/t1.png";
import "./card.css";

function Card() {
	return (
		<div className="testimonial-card">
			<p>
				The AI Business Club is for entrpreneurs, business owners, and
				professionals looking to integrate
			</p>
			<div className="person d-flex justify-content-between">
				<div className="text">
					<h3 className="title">WEB DEVELOPER</h3>
					<h3 className="name">Maria Samantha</h3>
				</div>
				<div className="avartar">
					<img src={T1} alt="" />
				</div>
			</div>
		</div>
	);
}

export default Card;
