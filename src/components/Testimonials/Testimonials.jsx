import Card from "../TestimonialCard/Card";
import "./testmonials.css";

function Testimonials() {
	return (
		<div className="testimonials">
			<div className="testimonials__all">
				<h3 className="heading text-center">
					Join other AI entrepreneurs & profit with your business
				</h3>
				<div className="cards row">
					<div className="col-md-6 col-lg-4 col-sm-12 my-4">
						<Card />
					</div>
					<div className="col-md-6 col-lg-4 col-sm-12 my-4">
						<Card />
					</div>
					<div className="col-md-6 col-lg-4 col-sm-12 my-4">
						<Card />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Testimonials;
