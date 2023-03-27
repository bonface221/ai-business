import { Routes, Route } from "react-router-dom";
import "./App.css";
import FrontPage from "./FrontPage";
import Form from "./components/ConsultingForm/Form";
import FormRedirect from "./components/FormRedirect/FormRedirect";
import SignIn from "./components/SignIn/SignIn";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<FrontPage />} />
				<Route path="/consultation" element={<Form />} />
				<Route path="/consultation-redirect" element={<FormRedirect />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</div>
	);
}

export default App;
