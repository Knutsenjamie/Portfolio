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
                                    <img src="assets/VALIDATEproj.png" alt="Validate website preview" onClick={()=>("https://github.com/Indev-Hub/VALIDATEAlpha")}/>
                                    <h3>VALIDATE</h3>
                                </div>
                                <div className="item">
                                    <img src="assets/vitallyvegMock.png" alt="Vitallyveg website preview"/>
                                    <h3>Vitally Veg Mock-Up</h3>
                                </div>
                                <div className="item">
                                    <img src="assets/vegAPI.png" alt="Swagger documentation and back-end preview"/>
                                    <h3>Vitally Veg API</h3>
                                </div>
                                <div className="item">
                                    <img src="assets/fableOf.png" alt="Fable of Griselda menu screen preview"/>
                                    <h3>Fable of Griselda</h3>
                                </div>
                                <div className="item">
                                    <img src="assets/vegSite.png" alt="Wordpress vitally veg website preview"/>
                                    <h3>Vitally Veg Wordpress Site</h3>
                                </div>
                                <div className="item">
                                    <img src="assets/catTinder.png" alt="Blind cat tinder website preview"/>
                                    <h3>Blind Cat Tinder</h3>
                                </div>
                        </div>
                </div>
        </div>
    )
}
