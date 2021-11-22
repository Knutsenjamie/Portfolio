//slider to naviagte through porfolio projects (with preview images), as well as vitallyveg website. 
import { Typography, Container } from '@material-ui/core';
import "./projects.scss"

export default function Projects() {
    return (
        <div className="projects" id="projects">
            <div className='textColor'>
                <Typography
                    sx={{
                        variant: 'h6',
                    }}
                >
                    Projects 
                </Typography>
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
                        <Typography
                            sx={{
                                variant: 'h3'
                            }}
                        >
                        VALIDATE
                        </Typography>
                    </Container>
            </div>
        </div>
    )
}
