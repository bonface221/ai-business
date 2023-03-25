import Image from "../../assets/lightbox.png";
import "./overview.css";

function Overview() {
	return (
		<div className="overview">
			<div className="overview__all container py-5">
				<div className="row">
					<div className="col-md-12 col-lg-12 top">
						<button className="btn mx-auto">AI PROFIT DENIUS-OVERVIEW</button>
						<h3>
							<span>AI Profit Genius:</span> The Magicians of the AI Business
							Revolution.
						</h3>
						<div className="overview__text">
							<p>
								Explore how the Genius Profit AI Content Platform can help you
								start your AI company.Take your profit margins to new heights.
							</p>
							<button className="btn btn-secondary">Join now</button>
						</div>
					</div>
					<div className="col-md-12 col-lg-12 p-4">
						<div className="row">
							<div className="col-md-12 col-lg-12 d-flex flex-wrap justify-content-between align-items-center">
								<h4>Customer AI solutions</h4>
								<h4>UI components</h4>
								<h4>ParaBot</h4>
								<h4>Prompt Creator</h4>
								<h4>Image Magic</h4>
							</div>
							<hr />
							<div className="col-md-12 col-lg-12">
								<div className="row">
									<div className="col-md-6 col-sm-12 col-lg-6">
										<p>
											I worked with the guys at CBRE to redesign their entire
											website and mobile App both Android and IOS. This project
											lasted for 4 months and was very challenging one.
										</p>
										<p>
											I worked with the guys at CBRE to redesign their entire
											website and mobile App both Android and IOS. This project
											lasted for 4 months and was very challenging one.
										</p>
										<p>
											I worked with the guys at CBRE to redesign their entire
											website and mobile App both Android and IOS. This project
											lasted for 4 months and was very challenging one.
										</p>
										<p>
											I worked with the guys at CBRE to redesign their entire
											website and mobile App both Android and IOS. This project
											lasted for 4 months and was very challenging one.
										</p>
									</div>
									<div className="col-md-6 col-sm-12 col-lg-6">
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
