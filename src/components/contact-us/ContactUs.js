import React, { Component } from 'react';
import { Container, Field, Label, SCTextarea, ButtonArea } from './style';
import Button from '../shared/button/Button';
import endpoints from '../../Services/services';
import SCInput from '../shared/input';

export default class ContactUs extends Component {
    constructor() {
        super();
        this.handleText = this.handleText.bind(this);
        this.state = {
            name: '',
            subject: '',
            email: '',
            message: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleText(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    async handleSubmit() {
        const mail = this.state;
        const response = await fetch(endpoints.mailEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...mail })
        });

        console.log(response);
    }

    render() {
        const { name, email, subject, message } = this.state;
        return (
            <Container>
                <Field>
                    <Label>Name:</Label>
                    <SCInput
                        id="name"
                        name="name"
                        value={name}
                        onChange={this.handleText}
                        placeholder="Enter your name:"
                    />
                </Field>
                <Field>
                    <Label>Email:</Label>
                    <SCInput
                        id="email"
                        name="email"
                        value={email}
                        onChange={this.handleText}
                        placeholder="Enter your mail:"
                    />
                </Field>
                <Field>
                    <Label>Subject:</Label>
                    <SCInput
                        id="subject"
                        name="subject"
                        value={subject}
                        onChange={this.handleText}
                        placeholder="Enter your subject:"
                    />
                </Field>
                <Field>
                    <Label>Message:</Label>
                    <SCTextarea
                        cols="40"
                        rows="15"
                        id="message"
                        name="message"
                        placeholder="Enter your message:"
                        onChange={this.handleText}
                        value={message}
                    />
                </Field>
                <ButtonArea>
                    <Button
                        onClick={this.handleSubmit}
                        type="button"
                        label="Send"
                        style={{ width: '100%' }}
                    />
                </ButtonArea>
            </Container>
        );
    }
}
