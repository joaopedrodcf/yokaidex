import React, { useState } from 'react';
import Send from 'react-feather/dist/icons/send';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { Field, Label, SCTextarea, ButtonArea } from './style';
import Button from '../../components/shared/button';
import endpoints from '../../services/services';
import Input from '../../components/shared/input';
import Global from '../../styles';
import withTracker from '../../components/shared/with-tracker';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleName = event => {
        setName(event.target.value);
    };
    const handleEmail = event => {
        setEmail(event.target.value);
    };
    const handleSubject = event => {
        setSubject(event.target.value);
    };
    const handleMessage = event => {
        setMessage(event.target.value);
    };

    const resetInputs = () => {
        setMessage('');
        setEmail('');
        setName('');
        setSubject('');
    };

    const handleSubmit = async () => {
        await axios
            .post(endpoints.mailEndpoint, { name, email, subject, message })
            .then(() => {
                resetInputs();
            })
            .catch(() => {
                resetInputs();
            });
    };

    return (
        <Global.Container>
            <Helmet>
                <title>
                    ContactUs | Yokaidex - Where you can find all the
                    information from Yo-kai Watch games!
                </title>
            </Helmet>
            <Field>
                <Label htmlFor="name">Name:</Label>
                <Input
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleName}
                    placeholder="Enter your name:"
                    isFullWidth
                    customPadding="12px"
                />
            </Field>
            <Field>
                <Label htmlFor="email">Email:</Label>
                <Input
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleEmail}
                    placeholder="Enter your mail:"
                    isFullWidth
                    customPadding="12px"
                />
            </Field>
            <Field>
                <Label htmlFor="subject">Subject:</Label>
                <Input
                    id="subject"
                    name="subject"
                    value={subject}
                    onChange={handleSubject}
                    placeholder="Enter your subject:"
                    isFullWidth
                    customPadding="12px"
                />
            </Field>
            <Field>
                <Label htmlFor="message">Message:</Label>
                <SCTextarea
                    cols="40"
                    rows="10"
                    id="message"
                    name="message"
                    placeholder="Enter your message:"
                    onChange={handleMessage}
                    value={message}
                />
            </Field>
            <ButtonArea>
                <Button
                    onClick={handleSubmit}
                    type="button"
                    label="Send"
                    width="100%"
                >
                    <Send size={18} />
                </Button>
            </ButtonArea>
        </Global.Container>
    );
};

ContactUs.whyDidYouRender = true;

export default withTracker(ContactUs);
