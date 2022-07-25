import { Link } from "react-router-dom";
import Container from "./style"
import logo from "./../../assets/img/image 1.png"

const Home = () => {
    return (
        <Container >
        <img src={logo} alt="logo" />
       	<h1>ZapRecall</h1>
		<Link to="/questions">
            <button>Iniciar Recall!</button>
        </Link>
        </Container>
    );
}

export default Home;


