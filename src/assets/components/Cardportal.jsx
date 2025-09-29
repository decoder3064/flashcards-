import { useState } from 'react'
import Flashcard from './flashcard'

function Cardportal(props){
    const [nextCard, setNextCard] = useState(0)
    const changeIndex = () =>{
        setNextCard(nextCard+1)
    }


    return (
    <>
        <Flashcard content={props.cards[nextCard]} ></Flashcard>
        <button onClick={changeIndex}>Next</button>
    </>
    )
} 


export  default Cardportal