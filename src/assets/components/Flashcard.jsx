import { useState } from "react"


function Flashcard(props){
    const [flipped, setFlipped] = useState(false);
    const updateFlipped = () => { 
        if(flipped === true){
            setFlipped(false)
        }
        else{
            setFlipped(true)
        }
        console.log("updated")
    }

    return (
        <div onClick={updateFlipped}>place text here</div>

    )


} 


export  default Flashcard