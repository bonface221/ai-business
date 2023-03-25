import Logo from "../../assets/logo.png";
import { BsTwitter } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import "./footer.css";

function Footer() {
	return (
		<div className="footer text-white container">
			<div className="footer-links row">
				<div className="legal col-md-2">
					<h3>LEGAL</h3>
					<h4>Terms & Conditions</h4>
					<h4>Privacy Policy</h4>
					<h4>EULA</h4>
					<h4>Disclaimer</h4>
				</div>
				<div className="company col-md-2">
					<h3>COMPANY</h3>
					<h4>Subscribe</h4>
					<h4>Contact Us</h4>
					<h4>Sign Up</h4>
					<h4>Sign In</h4>
				</div>
				<div className="resources col-md-2">
					<h3>RESOURCES</h3>
					<button className="btn btn1 p-2">Free Consulting</button>
					<button className="btn btn2 p-2">Join AI business Club</button>
				</div>
				<div className="subscribe col-md-6 px-5">
					<p>
						PS: We help entrepreneurs lunch their AI Business in days. Let us
						help you lunch your custom AI Solution.
					</p>
					<p>Join Now</p>

					<div className="input-form">
						<h3>WRITE YOUR EMAIL HERE AND JOIN THE BETA LIST</h3>
						<input
							type="text"
							className="form-control"
							placeholder="Your Email Address"
						/>
					</div>
				</div>
			</div>
			<hr />
			<div className="footer-copyright d-flex justify-content-between align-items-center">
				<img src={Logo} alt="" />
				<p>Not Copyright 2020 • Robin Williams. Webflow cloneable</p>
				<div className="social-handles d-flex gap-2">
					<BsTwitter className="twitter" /> <BsDribbble className="dribble" />{" "}
					<BsLinkedin className="linkedIn" />
				</div>
			</div>
		</div>
	);
}

export default Footer;
