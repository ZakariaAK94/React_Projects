import {useState} from "react"

export default function App() {
    const [isGoingOut, setisGoingOut] = useState(false)
       
    function handleClick()
    {
        setisGoingOut(prev => !prev)
    }
    
    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button className="value" onClick={handleClick}
            aria-label={`Current answer is ${isGoingOut ? "Yes" : "No"}. Click to change it.`}
            >{isGoingOut?"Yes":"Non"}</button>
        </main>
    )
}