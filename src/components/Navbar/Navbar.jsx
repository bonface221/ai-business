import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./navbar.css";

function Navbar() {
	return (
		<div className="navbar pt-0">
			<div className="container-fluid align-items-start">
				<Link to={"/"}>
					<img className="navbar__img navbar-brand" src={Logo} alt="" />
				</Link>
				<div className="d-flex align-items-center">
					<Link className="navbar__text me-3" to={"/dashboard"}>
						Dashboard
					</Link>
					<Link className="navbar__text me-3" to={"/consultation"}>
						Free Consulting
					</Link>

					<Link className="navbar__btn" to={"/sign-in"}>
						Sign In
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
