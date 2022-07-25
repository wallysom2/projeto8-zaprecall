import { useState } from "react";

import Question from "./style"
import logo from "./../../assets/img/image 1.png"
import data from "./../../data";
import Flashcard from "../Flashcard";

const Questions = () => {

    function montarFlashcards() {
        if (questions.length === 0) {
            data.sort((a,b) => Math.random() - 0.5);
            setQuestions([...data]);
            return <></>
    }
    else {
        return questions.map((card, index) => {
            const { question, answer } = card;
            return <Flashcard 
            key={index}
            question = {question}
            answer = {answer}
            indice = {index + 1}
            />
        }
        )
    }
}

    const [questions, setQuestions] = useState([]);

    const flashcards = montarFlashcards();

    return (
        <Question>
        <div>
        <img src={logo} alt="logo" />
       	<h1>ZapRecall</h1>
        </div>

        <main>
        {flashcards}
        </main>
        </Question>
    );  
}

export default Questions;
