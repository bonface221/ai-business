import Logo from "../../assets/logo.png";
import "./navbar.css";

function Navbar() {
	return (
		<div className="navbar pt-0">
			<div className="container-fluid align-items-start">
				<img className="navbar__img navbar-brand" src={Logo} alt="" />
				<div className="d-flex align-items-center">
					<p className="navbar__text me-3">Free Consulting</p>
					<button className="navbar__btn">Sign In</button>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
