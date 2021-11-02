import React from "react"
import "./menu.scss"


export default function Menu() {
    return (
        <div className="menu">
            <ul>
                <li>
                    <a  href="#aboutme">About Me</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact Me</a>
                </li>
            </ul>
        </div>
    )
}
