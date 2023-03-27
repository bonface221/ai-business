import { useState, useEffect } from "react";
import { RxAvatar, RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { ReactComponent as Parabot } from "../../assets/parabot.svg";
import { ReactComponent as PromptCreator } from "../../assets/prompt-creator.svg";
import { ReactComponent as ChatBot } from "../../assets/chatbotv1.svg";
import { ReactComponent as ImageMagic } from "../../assets/image-magic.svg";
import { ReactComponent as ImageSuperMagic } from "../../assets/image-super-magic.svg";
import { ReactComponent as OneClickArticle } from "../../assets/oneclick-article.svg";
import { ReactComponent as PlanGenerator } from "../../assets/plan-generator.svg";
import { ReactComponent as ManageCustomers } from "../../assets/manage-customers.svg";
import { ReactComponent as PromptViewer } from "../../assets/prompt-viewer.svg";
import { ReactComponent as ManagePlan } from "../../assets/manage-plan.svg";
import { ReactComponent as ComponentSandbox } from "../../assets/component-sandbox.svg";
import { ReactComponent as LogOut } from "../../assets/log-out.svg";
import Logo from "../../assets/logo.png";

import "./dashboard.css";

function Dashboard() {
	const [show, setShow] = useState(false);
	const [showClose, setShowClose] = useState(false);
	function showNav() {
		setShow(!show);
	}

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 576) {
				setShow(true);
				setShowClose(false);
			} else {
				setShow(false);
				setShowClose(true);
			}
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return (
		<div className="dashboard">
			<div className="dashboard__all">
				<div className="row">
					<div
						className="fixed-nav col-sm-3 col-md-3 col-lg-2"
						style={{ display: show ? "inline-block" : "none" }}
					>
						<img src={Logo} alt="" />
						{showClose && (
							<MdOutlineClose
								onClick={showNav}
								style={{
									color: "red",
									width: "30px",
									height: "30px",
									marginLeft: "5px",
								}}
							/>
						)}
						<div className="menu">
							<h3>Menu</h3>
							<p>
								<RxAvatar className="icon" /> <span>Account</span>
							</p>
							<p>
								<Parabot className="icon" /> <span>ParaBot v1</span>
							</p>
							<p>
								<PromptCreator className="icon" /> <span>Prompt Creator</span>
							</p>
							<p>
								<ChatBot className="icon" /> <span>ChatBot v1</span>
							</p>
						</div>
						<div className="tools">
							<h3>Tools</h3>
							<p>
								<ImageMagic className="icon" /> <span>Image Magic</span>
							</p>
							<p>
								<ImageSuperMagic className="icon" />{" "}
								<span>Image Super Magic</span>
							</p>
							<p>
								<OneClickArticle className="icon" />{" "}
								<span>One-click Article (Demo)</span>
							</p>
							<p>
								<PlanGenerator className="icon" />{" "}
								<span>Plan Generator (Demo)</span>
							</p>
							<p>
								<ManageCustomers className="icon" />{" "}
								<span>Manage Customers</span>
							</p>
							<p>
								<PromptViewer className="icon" /> <span>Prompt Viewer</span>
							</p>
							<p>
								<ManagePlan className="icon" /> <span>Manage Plan</span>
							</p>
							<p>
								<ComponentSandbox className="icon" />{" "}
								<span>Component Sanbox</span>
							</p>
						</div>
						<div className="logout">
							<p>
								<LogOut className="icon" /> <span>Log Out</span>
							</p>
						</div>
					</div>
					<div className="main col-sm-9 col-md-9 col-lg-10 ">
						<div className="main-nav">
							<h2>
								<span>{!show && <RxHamburgerMenu onClick={showNav} />}</span>{" "}
								Dashboard
							</h2>
							<button className="consulting btn btn-primary">
								Free Consulting
							</button>
						</div>
						<div className="main-content">
							<div className="row">
								<div className="main-content-left col-lg-6 col-md-12 col-sm-12 col-xs-12">
									<div>
										<h3>YOUR PLAN</h3>
										<p>Pro</p>
									</div>
									<div>
										<h3>AI WORDS LEFT</h3>
										<p className="words-left"> 434,382 / 500,000</p>
										<p className="renews">
											Your plan renews at 2/21/2024, 7:13:55PM
										</p>
										<p className="manage">
											<IoMdInformationCircleOutline className="circle-information-icon" />{" "}
											Click Here to manage your subscription
											(Upgrade/Downgrade/Cancel)
										</p>
									</div>
								</div>
								<div className="main-content-right col-lg-6 col-md-12 col-sm-12 col-xs-12">
									<h3>Hello, Admin</h3>
									<div className="btns">
										<form>
											<div>
												<RxAvatar className="avatar" />
												<input
													type="text"
													className="btn btn-primary btn1"
													placeholder="Your name ?"
												/>
											</div>
											<div>
												<input
													type="submit"
													value="Sign-in"
													className="btn btn-secondary btn2"
												/>
											</div>
										</form>
									</div>
									<p>Click here to reset your password</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
