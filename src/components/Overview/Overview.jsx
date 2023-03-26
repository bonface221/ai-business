import { TiTick } from "react-icons/ti";
import Image from "../../assets/lightbox.png";
import "./overview.css";

function Overview() {
	return (
		<div className="overview">
			<div className="overview__all container">
				<div className="row">
					<div className="col-md-12 col-lg-12 top text-center">
						<button className="btn">AI PROFIT GENIUS-OVERVIEW</button>
						<h3>
							<span>AI Profit Genius:</span> The Magicians of the AI Business
							Revolution.
						</h3>
						<div className="overview__text mt-3 row">
							<p className="col-md-10">
								Explore how the Genius Profit AI Content Platform can help you
								start your AI company. Take your profit margins to new heights.
							</p>
							<div className="col-md-2">
								<button className="btn">Join now</button>
							</div>
						</div>
					</div>
					<div className="col-md-12 col-lg-12 available-services">
						<div className="row">
							<div className="overview-nav col-md-12 col-lg-12 d-flex flex-wrap justify-content-between align-items-center mb-3">
								<h4>Customer AI solutions</h4>
								<h4>UI components</h4>
								<h4>ParaBot</h4>
								<h4>Prompt Creator</h4>
								<h4>Image Magic</h4>
							</div>
							<hr />
							<div className="overview-bottom col-md-12 col-lg-12 mt-3">
								<div className="row">
									<div className="overview-bottom-text col-md-6 col-sm-12 col-lg-6">
										<div>
											<span>
												<TiTick />
											</span>
											<p>
												I worked with the guys at CBRE to redesign their entire
												website and mobile App both Android and IOS. This
												project lasted for 4 months and was very challenging
												one.
											</p>
										</div>
										<div>
											<span>
												<TiTick />
											</span>
											<p>
												I worked with the guys at CBRE to redesign their entire
												website and mobile App both Android and IOS. This
												project lasted for 4 months and was very challenging
												one.
											</p>
										</div>
										<div>
											<span>
												<TiTick />
											</span>
											<p>
												I worked with the guys at CBRE to redesign their entire
												website and mobile App both Android and IOS. This
												project lasted for 4 months and was very challenging
												one.
											</p>
										</div>
										<div>
											<span>
												<TiTick />
											</span>
											<p>
												I worked with the guys at CBRE to redesign their entire
												website and mobile App both Android and IOS. This
												project lasted for 4 months and was very challenging
												one.
											</p>
										</div>
									</div>
									<div className="overview-bottom-text col-md-6 col-sm-12 col-lg-6">
										<img className="img-fluid" src={Image} alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Overview;
