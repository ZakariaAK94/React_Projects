
import React from "react"
import padsData from "./pads.js"
import Pad from "./Component/Pad.jsx"

export default function App() {
    const [pads, setPads] = React.useState(padsData)
    
    function toggle(id)
    {
        setPads(prev => prev.map(
            el =>  el.id===id ? {...el, on : !el.on } : el
        ))
                
    }        
       
    
    const buttonElements = pads.map(pad => (
        <Pad key={pad.id} id={pad.id} color={pad.color} on={pad.on} toggle={toggle}/>
    ))
    
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
