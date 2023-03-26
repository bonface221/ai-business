import Card from "../BenefitsCard/Card";
import "./benefits.css";

function Benefits() {
	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<div className="benefits container">
			<div className="row">
				<div className="benefits-top col-md-12 col-lg-12 text-center">
					<button className="btn btn1">BENEFITS OF AI PROFIT GENIUS</button>
					<h3>
						<p>Unlock your AI Business machine with</p>
						<p>AI Profit Genius - The ultimate AI Business builder.</p>
					</h3>
					<p>
						Achieve next-level Online business Efficiency with AI Profit Genius
					</p>
					<button className="btn btn2">Get FREE 500 Credits</button>
				</div>
				<div className="col-md-12 col-lg-12">
					<div className="row">
						{array.map((item, i) => (
							<div key={i} className="col-md-6 col-lg-6">
								<Card />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Benefits;
