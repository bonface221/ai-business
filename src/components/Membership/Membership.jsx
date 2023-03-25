import { TiTick } from "react-icons/ti";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./membership.css";

function Membership() {
	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<div className="membership text-white container-fluid">
			<div className="row">
				<div className="membership__left col-md-6">
					<h3>Meet the team of AI Profit Genius</h3>
					<h4>A gusto group of seasoned digital entrepreneurs</h4>
					<p>
						The AI Business Club is for entrpreneurs, business owners, and
						professionals looking to integrate AI into thier operations for
						growth and success. The AI Business Club is for entrpreneurs,
					</p>

					<div className="membership-list">
						<ul className="list-unstyled">
							{array.map((a, i) => (
								<li key={i} className="mb-3">
									<TiTick className="icon" />{" "}
									<span>I worked with the guys at CBRE</span> to redesign their
									entire website and mobile app from
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="membership__right col-md-6 px-5">
					<h3>Meet the team of AI Profit Genius</h3>
					<p>A gusto group of seasoned digital entrepreneurs</p>

					<div className="join">
						<div className="sign-up">
							<h4>AI Profit Genius Membership</h4>
							<p>Get your AI Business done right and fast</p>
							<div className="sign-up-btn">
								<p>Sign Up to see the demo and use AI components</p>
								<button className="btn">
									Sign-up <AiOutlineArrowRight />
								</button>
							</div>
							<div className="sign-up-items mt-4">
								<ul className="list-unstyled">
									<li>
										<span>
											<TiTick />
										</span>{" "}
										Custom Ai Business Solutions
									</li>
									<li>
										<span>
											<TiTick />
										</span>{" "}
										AI UI content Library
									</li>
									<li>
										<span>
											<TiTick />
										</span>{" "}
										Try ParaBot v1 and v2
									</li>
									<li>
										<span>
											<TiTick />
										</span>{" "}
										Try Prompt creator feature (1000s of custom generators)
									</li>
									<li>
										<span>
											<TiTick />
										</span>{" "}
										100K+ AI words for content generators
									</li>
									<li>
										<span>
											<TiTick />
										</span>{" "}
										Premium support
									</li>
								</ul>
							</div>
						</div>
						<div className="join-now">
							<h3>AI Business Club Membership</h3>
							<p>
								Get in our exclusive and private Ai Business Club on Discord
								Network and the top AI
							</p>
							<div className="join-now-btn">
								<p>Join the best AI Business network online</p>
								<button className="btn">
									Join now <AiOutlineArrowRight />
								</button>
							</div>
							<div className="join-now-items mt-4">
								<ul className="list-unstyled">
									<li>
										<TiTick className="icon" /> The ParaBot v1 and v2
									</li>
									<li>
										<TiTick className="icon" /> The private Discord server
										access
									</li>
									<li>
										<TiTick className="icon" /> 35K+ AI words for content
										generation
									</li>
									<li>
										<TiTick className="icon" /> Exclusive Entrepreneurial
										network
									</li>
									<li>
										<TiTick className="icon" /> Premium Support
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Membership;
