import { FaAngleDown } from "react-icons/fa";
import "./card.css";

function Card() {
	return (
		<div className="faq-card d-flex justify-content-between align-items-center">
			<h3>Who is AI Profit Genius for?</h3>
			<FaAngleDown className="faq-icon" />
		</div>
	);
}

export default Card;
