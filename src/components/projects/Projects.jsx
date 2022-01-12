//slider to naviagte through porfolio projects (with preview images), as well as vitallyveg website. 
import { useEffect, useState } from 'react';
import ProjectList from '../projectList/ProjectList';
import "./projects.scss"

export default function Projects() {
    const[selected, setSelected] = useState("validate")

    const list = [
        {
            id: "validate",
            title: "VALIDATE",
        },
        {
            id: "mockup",
            title: "Vitally Veg Mock-Up",
        },
        {
            id: "api",
            title: "Vitally Veg API",
        },
        {
            id: "fable",
            title: "Fable Of Griselda",
        },
        {
            id: "cat",
            title: "Blind Cat Tinder",
        },
    ];

    return (
        <div className="projects" id="projects">
            <div className='textColor'>
                <h1>Projects</h1> 
                    <ul>
                        {list.map(item=>(
                            <ProjectList 
                                title={item.title} 
                                active={selected === item.id}  
                                setSelected={setSelected}
                                id={item.id}
                                />
                            ))}
                    </ul>
                    <div className="container">
                            <div className="item">
                                <a href="https://github.com/Indev-Hub/VALIDATEAlpha">
                                    <img src="assets/VALIDATEproj.png" alt="Validate website preview"/>
                                    </a>
                                    <h3>VALIDATE</h3>
                            </div>
                            <div className="item">
                                <a href="https://github.com/Knutsenjamie/Vitally-Veg">
                                    <img src="assets/vitallyvegMock.png" alt="Vitallyveg website preview"/>
                                    </a>
                                    <h3>Vitally Veg Mock-Up</h3>
                            </div>
                            <div className="item">
                                <a href="https://github.com/Knutsenjamie/Vitally-Veg-API">
                                    <img src="assets/vegAPI.png" alt="Swagger documentation and back-end preview"/>
                                    </a>
                                    <h3>Vitally Veg API</h3>
                            </div>
                            <div className="item">
                                <a href="https://github.com/Knutsenjamie/TheFableOfGriselda.Solution">
                                    <img src="assets/fableOf.png" alt="Fable of Griselda menu screen preview"/>
                                    </a>
                                    <h3>Fable of Griselda</h3>
                            </div>
                            <div className="item">
                                <a href="https://vitallyveg.com/">
                                    <img src="assets/vegSite.png" alt="Wordpress vitally veg website preview"/>
                                </a>
                                    <h3>Vitally Veg Wordpress Site</h3>
                            </div>
                            <div className="item">
                                <a href="https://github.com/Knutsenjamie/blind-cat-tinder">
                                    <img src="assets/catTinder.png" alt="Blind cat tinder website preview"/>
                                </a>
                                    <h3>Blind Cat Tinder</h3>
                            </div>
                        </div>
                </div>
        </div>
    )
}
