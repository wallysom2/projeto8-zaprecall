import { Link } from "react-router-dom";
import Container from "./style"

const Home = () => {
    return (
        <Container >
       	<h1>ZapRecall</h1>
		<Link to="/contato">
            <button>Iniciar Recall!</button>
        </Link>
        </Container>
    );
}

export default Home;


