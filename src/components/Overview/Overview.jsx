import { useState, useEffect } from "react";
import { TiTick } from "react-icons/ti";
import Image from "../../assets/lightbox.png";
import "./overview.css";

function Overview() {
	const [fullWidth, setFullWidth] = useState("container");

	useEffect(() => {
		const handleResize = () => {
			setFullWidth(window.innerWidth <= 991 ? "container-fluid" : "container");
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return (
		<div className="overview">
			<div className={`overview__all ${fullWidth}`}>
				<div className="row">
					<div className="col-md-12 col-lg-12 col-sm-12 top text-center">
						<button className="btn">AI PROFIT GENIUS-OVERVIEW</button>
						<h3>
							<span>AI Profit Genius:</span> The Magicians of the AI Business
							Revolution.
						</h3>
						<div className="overview__text mt-3 row">
							<p className="col-md-10 col-sm-10">
								Explore how the Genius Profit AI Content Platform can help you
								start your AI company. Take your profit margins to new heights.
							</p>
							<div className="col-md-2 col-sm-12">
								<button className="btn">Join now</button>
							</div>
						</div>
					</div>
					<div className="col-md-12 col-lg-12 col-sm-12 available-services">
						<div className="row">
							<div className="overview-nav col-md-12 col-lg-12 mb-3">
								<div className="d-flex justify-content-between flex-wrap">
									<h4>Customer AI solutions</h4>
									<h4>UI components</h4>
									<h4>ParaBot</h4>
									<h4>Prompt Creator</h4>
									<h4>Image Magic</h4>
								</div>
							</div>
							<hr />
							<div className="overview-bottom col-md-12 col-lg-12 col-sm-12 mt-3">
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
									<div className="overview-bottom-text-img col-md-6 col-sm-12 col-lg-6">
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
