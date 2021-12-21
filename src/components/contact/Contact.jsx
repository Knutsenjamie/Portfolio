import React from 'react'
import "./contact.scss"
import { TextField, Button } from '@material-ui/core';
// import { ContactForm } from '../contactForm/ContactForm';

// export default function Contact() {
//     return (
//         // <div className="contact" id="contact">
//         //         {/* <ContactForm/> */}
//         // </div>
        
//     )
// }

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <h1>Contact Me</h1>
                <form>
                    <TextField label="Full Name" fullWidth autocomplete="none"/>
                    <TextField label="Email" fullWidth autocomplete="none"/>
                    <TextField label="Message" fullWidth multiline rows={5} autocomplete=
                    "none"/>
                    <Button type="submit">Submit</Button>
                </form>
        </div>
    )
}


