/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react"
import avatar from "../Icons/user.png"

export default function Header(props) {
       

    return (
        <header>
            <img src={avatar} />
            <p>{props.username}</p>
        </header>
    )
}
