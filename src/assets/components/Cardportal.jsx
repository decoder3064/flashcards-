import { use, useState } from 'react'
import Flashcard from './flashcard'
import Form from "/Users/davidreyes/Documents/Codepath Code/flashcards!/src/assets/components/Form.jsx"
import ReactionsPortal from "/Users/davidreyes/Documents/Codepath Code/flashcards!/src/assets/components/ReactionsPortal.jsx"

function Cardportal(props){
    const [nextCard, setNextCard] = useState(0)
    const [reactions,setReactions] = useState({})

    console.log("Current reactions:", reactions); // Add this line


    const nextIndex = () =>{
        setNextCard(nextCard+1)
    }
    const prevIndex = () =>{
        setNextCard(nextCard-1)
    }

    if (nextCard < 0){
        return (
        <>
            <h2 className="title3">Sorry Lil Bro theres no more this way.</h2>
            <button onClick={nextIndex}>Next</button>
        </>
        )

    }

    
    if (nextCard >= props.cards.length) {
        return (
            <div className="end-screen">
                <h2 className="title3">🎉 Congrats lil bro! YOu HaVe ReaChed ThE EnD 🎉</h2>
                <ReactionsPortal react = {reactions}  cards={props.cards}/>
                <img className="end-gif"src="images/end.gif" />
                <button onClick={() => setNextCard(0)}>Start Over</button>
            </div>
        )
    }


    return (
    <>
        <Flashcard content={props.cards[nextCard]}></Flashcard>
        <Form 
            jokeId = {props.cards[nextCard].id}
            reactions= {reactions}
            setReactions ={setReactions}
            ></Form>
        <button onClick={prevIndex}>Previous</button>
        <button onClick={nextIndex}>Next</button>
        
        
    </>
    )
} 


export  default Cardportal