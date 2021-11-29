//slider to naviagte through porfolio projects (with preview images), as well as vitallyveg website. 
import { Typography, Container } from '@material-ui/core';
import "./projects.scss"

export default function Projects() {
    return (
        <div className="projects" id="projects">
            <div className='textColor'>
                    <h1>Projects</h1> 
                        <ul>
                            <li className="active">VALIDATE</li>
                            <li>Vitally Veg Mock-Up</li>
                            <li>Vitally Veg API</li>
                            <li>Fable Of Griselda</li>
                            <li>Blind Cat Tinder</li>
                        </ul>
                        <div className="container">
                            <div className="item">
                                <img src="assets/VALIDATEproj.png" alt="Validate website preview"/>
                                <img src="assets/vitallyvegMock.png" alt="Vitallyveg website preview"/>
                                <img src="assets/vegAPI.png" alt="Swagger documentation and back-end preview"/>
                                <img src="assets/fableOf.png" alt="Fable of Griselda menu screen preview"/>
                                <img src="assets/vegSite.png" alt="Wordpress vitally veg website preview"/>
                                <img src="assets/catTinder.png" alt="Blind cat tinder website preview"/>
                            </div>
                                <h3>VALIDATE</h3>
                                <h3>Vitally Veg Mock-Up</h3>
                                <h3>Vitally Veg API</h3>
                                <h3>Fable of Griselda</h3>
                                <h3>Blind Cat Tinder</h3>
                                <h3>Vitally Veg Wordpress Site</h3>
                        </div>
            </div>
        </div>
    )
}
