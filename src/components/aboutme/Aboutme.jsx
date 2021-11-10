//picture of me, hobbies, career leading up to this point, future goals, resume pdf download.
import "./aboutme.scss"
import { Box, Container, Grid } from '@material-ui/core';

export default function Aboutme() {
    return (
        <div className="aboutme" id="aboutme">
            <div className="left">
                {/* <div className="imgContainer">
                <img 
                    src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
      alt="new"
                />
                </div> */}
            </div>
            <div className="right">
            <Grid
                container
            >
                <Box
                sx={{
                    width: '40vw',
                    height: 'auto',
                    bgcolor: 'whitesmoke', 
                }}
                >  
                    <div className="aboutText">
                            <p>
                                <span>Welcome</span> to my portfolio! I am Jamie- a software developer with a blend of creativity, passion for achievement, exceptional communication skills, and self-motivation. I began my career as a chef in 2018- graduating from Clover Park Technical College with an Associates of Culinary Arts. Not but a year later, with hard work and little experience, I became a Kitchen-Manager. After working in the industry for about 2 years, I knew that I didn't want to stop my achievements there.
                            </p>
                            <br></br>
                            <p>
                                <span>I</span> always have had an interest in tech, and have even built some websites for clients in the past. It was time to create a website and business for myself. Combining tech and my passion for cooking resulted in me opening up my own business and food blog, vitallyveg.com and Vitally Veg LLC at the beginning of 2020. After the pandemic hit, the restaurant industry was also hit pretty badly, and I became unemployed. I didn't want to become complacent, or waste precious time waiting around for another opportunity. I thought about my love for tech a bit more, and reevaluated my situation- resulting in me joining Epicodus and beginning my software development journey!
                            </p>
                            <br></br>
                            <p>
                                <span>Fast-forward</span> to now, where I have been given the gracious opportunity as a Software Developer at VALIDATE. I have mostly utilized React at VALIDATE: but I also have a background using JavaScript, and C#- as well as various frameworks associated with each language. At the end of the day, my goal is to increase my knowledge in software development and use it not only for my career working and helping others; but to better my LLC and own personal endeavors over time.
                            </p>
                    </div>
                </Box>
            </Grid>
            </div>
        </div>
    );
}
