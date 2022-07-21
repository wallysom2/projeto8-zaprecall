import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/index";
import "./assets/css/reset.css";

function App() {
	return (
	
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Home" element={<Home />} />
			</Routes>
		</BrowserRouter>
		
	);
}
export default App;

