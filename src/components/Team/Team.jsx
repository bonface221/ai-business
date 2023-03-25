import Card from "../TeamCard/Card";
import "./team.css";

function Team() {
	return (
		<div className="team container text-white">
			<h3>Meet the team of AI Profit Genius</h3>
			<p>A gusto group of seasoned digital entrepreneurs</p>
			<div className="team-cards">
				<div className="row">
					<div className="col-md-4">
						<Card />
					</div>
					<div className="col-md-4">
						<Card />
					</div>
					<div className="col-md-4">
						<Card />
					</div>
					<div className="col-md-4">
						<Card />
					</div>
					<div className="col-md-4">
						<Card />
					</div>
					<div className="col-md-4">
						<Card />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Team;
