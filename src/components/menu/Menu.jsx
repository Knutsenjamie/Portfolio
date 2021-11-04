import React from "react"
import "./menu.scss"
import { Box } from '@material-ui/core';


export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu "+(menuOpen && "active")} >
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
