import { RxAvatar } from "react-icons/rx";
import { ReactComponent as Key } from "../../assets/key.svg";
import { ReactComponent as Row } from "../../assets/hr.svg";
import { ReactComponent as Google } from "../../assets/google.svg";
import Navbar from "../Navbar/Navbar";
import "./sign-in.css";

function SignIn() {
	return (
		<div className="sign-in">
			<div className="all-items">
				<Navbar />
				<div className="login-form">
					<div className="content">
						<h3>Sign In</h3>
						<form>
							<div className="email">
								<RxAvatar className="icon" />
								<input
									type="text"
									className="form-control custom-input type-text"
									placeholder="Email"
								/>
							</div>
							<div className="password">
								<Key className="icon" />
								<input
									type="password"
									className="form-control custom-input type-text"
									placeholder="Password"
								/>
							</div>
							<div className="submit">
								<input
									type="submit"
									className="custom-input form-control"
									value="Sign In"
								/>
							</div>
							<p>
								Don't have an account? <span>Sign Up</span>{" "}
							</p>
							<div className="horizontal-row-container">
								<Row className="horizontal-row" />
							</div>

							<div className="sign-with-google">
								<div className="google">
									<Google className="icon" />
									<input
										type="button"
										className="form-control custom-input"
										value="Sign In with Google"
									/>
								</div>
								<p>Google Privacy Policy and Terms of Service apply</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SignIn;
