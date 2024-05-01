import './hidden.css'
import { useState } from 'react'




export default function HiddenSearch(){
    const [showInput, setShowInput] = useState(false)
    const [bgColor, setBgColor] = useState("white")

    function handleClick(e){
        setBgColor("#1a1a1a")
        if(e.target.className === "container"){
            setShowInput(false)
            setBgColor("white")
        }


    }

    return(
        <div>
            <section className="container" style={{backgroundColor : bgColor}} onClick={handleClick}>
                {showInput ? (
                    <input type="text" placeholder='Search...'/>
                ) : 
                (
                    <button className='search-btn' onClick={() => setShowInput(true)}>Search</button>
                )}
            </section>
            <h1>hello</h1>
        </div>
    )
}