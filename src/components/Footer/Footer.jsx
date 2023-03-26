import Logo from "../../assets/logo.png";
import { BsTwitter } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import "./footer.css";

function Footer() {
	return (
		<div className="footer-container container-fluid">
			<div className="footer text-white container">
				<div className="footer-links row">
					<div className="legal col-md-4 col-lg-2 col-sm-4 ">
						<h3>LEGAL</h3>
						<h4>Terms & Conditions</h4>
						<h4>Privacy Policy</h4>
						<h4>EULA</h4>
						<h4>Disclaimer</h4>
					</div>
					<div className="company col-md-4 col-lg-2 col-sm-4 ">
						<h3>COMPANY</h3>
						<h4>Subscribe</h4>
						<h4>Contact Us</h4>
						<h4>Sign Up</h4>
						<h4>Sign In</h4>
					</div>
					<div className="resources col-md-4 col-lg-2 col-sm-4 ">
						<h3>RESOURCES</h3>
						<div>
							<button className="btn btn1 p-2">Free Consulting</button>
							<button className="btn btn2 p-2">Join AI business Club</button>
						</div>
					</div>
					<div className="subscribe col-lg-6 col-md-12 col-sm-12 px-5">
						<p>
							PS: We help entrepreneurs lunch their AI Business in days. Let us
							help you lunch your custom AI Solution.
						</p>
						<p>Join Now</p>

						<div className="input-form">
							<h3>WRITE YOUR EMAIL HERE AND JOIN THE BETA LIST</h3>
							<div className="email-form">
								<input
									type="text"
									id="email"
									className="form-control"
									placeholder="Your Email Address"
								/>
								<input
									type="submit"
									className="get-access btn"
									value="GET ACCESS"
								/>
							</div>
						</div>
					</div>
				</div>
				<hr />
				<div className="footer-copyright">
					<div className="row">
						<div className="col-md-4 col-sm-4 col-lg-4 text-start my-auto">
							<img src={Logo} alt="" />
						</div>
						<p className="col-md-4 col-sm-4 col-lg-4 copyright-text  my-auto">
							<span>
								{" "}
								Not Copyright 2020 • Robin Williams. Webflow cloneable
							</span>
						</p>
						<div className="social-handles col-md-4 col-sm-4 col-lg-4 my-auto ">
							<div>
								<BsTwitter className="twitter social-handle-item" />{" "}
								<BsDribbble className="dribble social-handle-item" />{" "}
								<BsLinkedin className="linkedIn social-handle-item" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
