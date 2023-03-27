import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./redirect.css";

function FormRedirect() {
	return (
		<div className="redirect">
			<div className="upper-part text-center">
				<h3>Thank Your for your request. We will contact you shortly</h3>
				<h3>
					Check out our tools in the Meantime and Join AI Business Club ro chat!
				</h3>

				<div className="redirects">
					<h4>Try our demo AI Solution features and the dashboard</h4>
					<button className="btn btn1">
						<Link to={"/sign-in"} className="sign-up-link">
							Sign Up <AiOutlineArrowRight />
						</Link>
					</button>
				</div>
			</div>
			<div className="logo-text">
				<img src={Logo} alt="" />
				<p>
					I worked with the guys at CBRE to redesign their entire website and
					mobile app fro I worked with the guys at CBRE to redesign their entire
					website and mobile app fro
				</p>
			</div>
			<div className="redirects text-center">
				<h4>Joint the best AI Business network online to date</h4>
				<button className="btn btn2">
					Join Now <AiOutlineArrowRight />
				</button>
			</div>
		</div>
	);
}

export default FormRedirect;
