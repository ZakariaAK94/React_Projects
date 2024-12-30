/* eslint-disable no-unused-vars */
import Header from "./Header"
import Body from "./Body"
import {useState} from "react"

export default function App() {

  const [userName, setUserName] = useState("Joe")
    return (
        <main>
            <Header username={userName}/>
            <Body username={userName}/>
        </main>
    )
}
