import { useState } from "react"

function Flashcard(props){
    const [flipped, setFlipped] = useState(false);
    
    const updateFlipped = () => { 
        setFlipped(!flipped);
        console.log("updated");
    }

    return (
        <div onClick={updateFlipped} className="flash-card">
            <div className={`flash-card-inner ${flipped ? 'flipped' : ''}`}>
                <div className="flash-card-face flash-card-front">
                    {props.content.front}
                </div>
                <div className="flash-card-face flash-card-back">
                    {props.content.back}
                </div>
            </div>
        </div>
    )
}

export default Flashcard

