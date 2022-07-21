
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PaginaPrincipal from "./PaginaPrincipal";
import Contato from "./Contato";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<PaginaPrincipal />} />
				<Route path="/contato" element={<Contato />} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;