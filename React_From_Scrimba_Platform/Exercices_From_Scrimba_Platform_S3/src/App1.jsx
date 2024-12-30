/* eslint-disable react/jsx-key */
import './App.css'
import Joke from './Component/Joke'
import jokesData from "./Jokesdata"

function App1() {
 const jokesElement = jokesData.map((joke)=>{
  return <Joke setup={joke.setup} punchline={joke.punchline} id={joke.id}/>
 })
  return (
    <div className='contacts'>
       {jokesElement}
    </div>      
  )
}

export default App1

