/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {useState} from "react"
export default function Pad(props)
{
    
    return <button 
           style={{backgroundColor:props.color}} 
           className={props.on ? "on" :undefined}
           onClick={()=>props.toggle(props.id)}
           > </button>
}