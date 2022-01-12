import React from 'react';
import "./contact.scss"
import { TextField, Button } from '@material-ui/core';
import { useFormControls } from '../useformcontrols/UseFormControls';

const inputFieldValues = [
    {
        name: "fullName",
        label: "Full Name",
        id: "my-name"
    },
    {
        name: "email",
        label: "Email",
        id: "my-email"
    },
    {
        name: "message",
        label: "Message",
        id: "my-message",
        multiline: true,
        rows: 10
    }
];


export default function Contact() {
    const {
        handleInputValue,
        handleFormSubmit,
        formIsValid,
        errors
    } = useFormControls();
    return (
        <div className="contact" id="contact">
            <h1>Contact Me</h1>
            <form onSubmit={handleFormSubmit}>
                {inputFieldValues.map((inputFieldValue, index) => {
                    return (
                    <div className="emailForm">
                        <TextField
                            key={index}
                            onBlur={handleInputValue}
                            onChange={handleInputValue}
                            name={inputFieldValue.name}
                            label={inputFieldValue.label}
                            multiline={inputFieldValue.multiline ?? false}
                            rows={inputFieldValue.rows ?? 1}
                            autoComplete="none"
                            {...(errors[inputFieldValue.name] && { error: true, helperText: errors[inputFieldValue.name] })}
                        />
                    </div>
                    );
                })}
                <div className="buttonStyling">
                    <Button
                        type="submit"
                        disabled={!formIsValid()}
                    >
                        Send Message
                    </Button>
                </div>
            </form>
        </div>
    )
}


