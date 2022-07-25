import {useState} from 'react';

function Flashcard (props){

    const { question, answer, indice } = props;
    const [fase, setFase] = useState(1);


    if (fase === 1) {
        return (
        <>
        <h1>Pergunta {indice}</h1>
        </>
        )
    }
    else if (fase === 2) {
        return <h1>{question}</h1>
            



    return (
        <>
        <h2> Pergunta {indice}</h2>
        <h2> {question} </h2>
        <h2>{answer}</h2>
        </>
    )
}

export default Flashcard;