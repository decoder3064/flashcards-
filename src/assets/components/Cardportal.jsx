import { useState } from 'react'
import Flashcard from './flashcard'

function Cardportal(props){

    return (
    <>
        <div>
            <Flashcard></Flashcard>
        </div>
        <button onClick={length++}>Next</button>
    </>
    )
} 


export  default Cardportal