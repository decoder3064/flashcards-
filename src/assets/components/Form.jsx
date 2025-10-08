
import { useState } from "react"

function Form(props){
    const [res, setRes] = useState("")



    const handleSubmit = (e) => {setRes(e.target.value)}

    const saveRes = (e) =>{
        e.preventDefault()
        if (!res.trim()) {
            alert("Come on lil bro, say something! 😭");
            return;
        }
        props.setReactions({...props.reactions, [props.jokeId]:res} )
        console.log("User submitted:",res)
        alert("Dont be too hard man!jsヵfj")
        setRes('')


    }

    return(
    <>
        <div>
            <h4 className="descrpition">Say somthing funny, or yap about how the joke made u feel</h4>
            <form onSubmit={saveRes}>
                <input type="text" 
                       value={res} 
                       onChange={handleSubmit}/>
                <button >crack it!</button>
            </form>
        </div>
    
    </>
    )
}

export default Form