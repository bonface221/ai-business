import Card from "../FAQCard/Card";
import "./faq.css";

function FAQ() {
	const array = [1, 2, 3, 4, 5, 6, 7];
	return (
		<div className="faq container text-white">
			<div className="heading">
				<h3>Frequently Asked Questions</h3>
				<p>Find out everything you want to know about AI Profit Genius</p>
			</div>
			<div className="faq-cards-container d-flex justify-content-center">
				<div className="faq-cards">
					{array.map((item, index) => (
						<Card key={index} />
					))}
				</div>
			</div>

			<div className="foot-note text-center my-5">
				<h4>Did you find the answer you were looking for?</h4>
				<u>Contact our support at ai.profit.genius@gmail.com</u>
				<button className="btn">Join Now</button>
			</div>
		</div>
	);
}

export default FAQ;
