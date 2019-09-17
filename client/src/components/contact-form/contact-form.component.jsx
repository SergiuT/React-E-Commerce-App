import React, { useState } from 'react';
import axios from 'axios';

import './contact-form.styles.jsx'
import FormInput from '../form-input/form-input.component';
import { ContactFormContainer } from './contact-form.styles.jsx';
import CustomButton from '../custom-button/custom-button.component';
import { SignInTitle } from '../sign-in/sign-in.styles.jsx';

const ContactForm = () => {

    const [userData, setUserData] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = userData;

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        const { value, name } = e.target;

        setUserData({ ...userData, [name]: value });
    }

    const handleClick = () => {
        setUserData({ ...userData, name: '', email: '', message: ''});
    }

    return (
        <ContactFormContainer>
            <SignInTitle>Leave a message</SignInTitle>
            <form id="contact-form" onSubmit={handleSubmit} method="POST">
                <FormInput
                    name='name'
                    type='text'
                    value={name}
                    label='Name'
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    name='email'
                    type='email'
                    value={email}
                    label='Email'
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    name='message'
                    type='message'
                    value={message}
                    label='Message'
                    handleChange={handleChange}
                    required
                />
                <CustomButton onClick={handleClick} style={{margin: '0 auto'}} type="submit">Submit</CustomButton>
            </form>
        </ContactFormContainer>
    )
};

export default ContactForm;