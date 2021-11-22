//slider to naviagte through porfolio projects (with preview images), as well as vitallyveg website. 
import { Typography, Container } from '@material-ui/core';
import "./projects.scss"

export default function Projects() {
    return (
        <div className="projects" id="projects">
            <div className='textColor'>
                    <h1>Projects</h1> 
                        <ul>
                            <li>VALIDATE</li>
                            <li>Vitally Veg Mock-Up</li>
                            <li>Vitally Veg API</li>
                            <li>Fable Of Griselda</li>
                            <li>Blind Cat Tinder</li>
                        </ul>
                        <Container>
                            <div className="item">
                                <img src="assets/VALIDATEproj.png" alt="Validate website preview"/>
                            </div>
                        <h3>VALIDATE</h3>
                    </Container>
            </div>
        </div>
    )
}
