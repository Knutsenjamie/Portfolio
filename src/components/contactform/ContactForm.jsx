import React from 'react'
import { TextField, Button } from '@material-ui/core';

export const ContactForm = () => {
    return (
        <form>
            <TextField label="Full Name"/>
            <TextField label="Email"/>
            <TextField label="Message"/>
            <Button type="submit">Submit</Button>
        </form>
    )
}
