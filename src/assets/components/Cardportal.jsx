import { useState } from 'react'
import Flashcard from './flashcard'

function Cardportal(props){
    const [nextCard, setNextCard] = useState(0)
    const changeIndex = () =>{
        setNextCard(nextCard+1)
    }
    
     if (nextCard >= props.cards.length) {
        return (
            <div className="end-screen">
                <h2 className="title3">🎉 Congrats lil bro! YOu HaVe ReaChed ThE EnD 🎉</h2>
                <img className="end-gif"src="images/end.gif" />
                <button onClick={() => setNextCard(0)}>Start Over</button>
            </div>
        )
    }


    return (
    <>
        <Flashcard content={props.cards[nextCard]}></Flashcard>
        <button onClick={changeIndex}>Next</button>
    </>
    )
} 


export  default Cardportal