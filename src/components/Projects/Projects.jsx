import Paypal from "../../assets/paypal.png";
import Stripe from "../../assets/stripe.png";
import Amazon from "../../assets/amazon-pay.png";
import "./projects.css";

function Projects() {
	return (
		<div className="projects container d-flex align-items-center justify-content-center">
			<div className="projects__section row">
				<div className="col-md-9 col-lg-9 row">
					<div className="projects__text col-md-12">
						<h3>MY PROJECTS</h3>
						<p>Join other AI entrepreneurs & profit with your Ai business</p>
					</div>
					<div className="projects__brand mt-4 col-md-12">
						<img src={Paypal} alt="" />
						<img src={Stripe} alt="" />
						<img src={Amazon} alt="" />
					</div>
				</div>
				<div className="col-md-3 col-lg-3"></div>
			</div>
		</div>
	);
}

export default Projects;
