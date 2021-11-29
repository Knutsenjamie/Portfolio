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
                        <Container
                            sx={{
                                width: '70%'
                            }}
                        >
                            <div className="item">
                                <img src="assets/VALIDATEproj.png" alt="Validate website preview"/>
                                <h3>VALIDATE</h3>
                                <img src="assets/vitallyvegMock.png" alt="Vitallyveg website preview"/>
                                <h3>Vitally Veg Mock-Up</h3>
                                <img src="assets/vegAPI.png" alt="Swagger documentation and back-end preview"/>
                                <h3>Vitally Veg API</h3>
                                <img src="assets/fableOf.png" alt="Fable of Griselda menu screen preview"/>
                                <h3>Fable of Griselda</h3>
                                <img src="assets/vegSite.png" alt="Wordpress vitally veg website preview"/>
                                <h3>Vitally Veg Wordpress Site</h3>
                                <img src="assets/catTinder.png" alt="Blind cat tinder website preview"/>
                                <h3>Blind Cat Tinder</h3>
                            </div>
                    </Container>
            </div>
        </div>
    )
}
