import Team1 from "../../assets/team1.png";
import "./card.css";

function Card() {
	return (
		<div className="team-card">
			<div className="img-container">
				<img src={Team1} alt="" />
				<div className="content">
					<h3 className="name">Toblas Boya</h3>
					<p className="department">Marketing & Design</p>
				</div>
			</div>
		</div>
	);
}

export default Card;
