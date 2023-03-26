import Benefits from "./components/Benefits/Benefits";
import FAQ from "./components/FAQ/FAQ";
import Home from "./components/Home/Home";
import Overview from "./components/Overview/Overview";
import Testimonials from "./components/Testimonials/Testimonials";
import Team from "./components/Team/Team";
import Membership from "./components/Membership/Membership";
import Footer from "./components/Footer/Footer";

function FrontPage() {
	return (
		<div
			style={{
				backgroundColor: "#000000",
			}}
		>
			<Home />
			<Overview />
			<Benefits />
			<FAQ />
			<Testimonials />
			<Team />
			<Membership />
			<Footer />
		</div>
	);
}

export default FrontPage;
