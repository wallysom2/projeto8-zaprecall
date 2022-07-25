import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Home from "./components/Home/";
import Questions from "./components/Questions/";
import "./assets/css/reset.css";


function App() {
	return (
	<Container>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/questions" element={<Questions />} />
			</Routes>
		</BrowserRouter>
	</Container>
	);
}
export default App;

const Container = styled.div `
display: flex;
flex-direction: column;
height: 100vh;
width: 475px;
margin: 0 auto;
background-color: #FB6B6B;
`
