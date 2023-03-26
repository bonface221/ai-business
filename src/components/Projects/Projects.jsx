import { useState, useEffect } from "react";
import Paypal from "../../assets/paypal.png";
import Stripe from "../../assets/stripe.png";
import Amazon from "../../assets/amazon-pay.png";
import "./projects.css";

function Projects() {
	const [fullWidth, setFullWidth] = useState("container");

	useEffect(() => {
		const handleResize = () => {
			setFullWidth(window.innerWidth <= 767 ? "container-fluid" : "container");
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return (
		<div
			className={`projects d-flex align-items-center justify-content-center ${fullWidth}`}
		>
			<div className="projects__section row">
				<div className="col-md-11 col-lg-11 row">
					<div className="projects__text col-md-12">
						<h3>MY PROJECTS</h3>
						<p>Join other AI entrepreneurs & profit with your Ai business</p>
					</div>
					<div className="projects__brand mt-4 col-md-12">
						<img className="img-fluid" src={Paypal} alt="" />
						<img className="img-fluid" src={Stripe} alt="" />
						<img className="img-fluid" src={Amazon} alt="" />
					</div>
				</div>
				<div className="col-md-1 col-lg-1"></div>
			</div>
		</div>
	);
}

export default Projects;
