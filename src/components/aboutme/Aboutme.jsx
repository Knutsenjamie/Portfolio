//picture of me, hobbies, career leading up to this point, future goals, resume pdf download.
import "./aboutme.scss"
import { Box } from '@material-ui/core';

export default function Aboutme() {
    return (
        <div className="aboutme" id="aboutme">
            <div className="left"></div>
            <div className="right">
                <Box
                sx={{
                    width: 670,
                    height: '98%',
                    bgcolor: 'whitesmoke', 
                }}
                />    
            </div>
        </div>
    );
}
