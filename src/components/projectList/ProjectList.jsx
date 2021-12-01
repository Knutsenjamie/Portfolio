import React from 'react'
import "./projectList.scss"

export default function ProjectList({title}) {
    return (
        <li className="projectList">
            {title}
        </li>
    )
}
