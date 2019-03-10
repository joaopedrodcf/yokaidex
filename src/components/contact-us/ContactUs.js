import React, { Component } from 'react';
import { Container, Field, Label, SCTextarea, TextAreaField } from './style';
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
    }

    handleText(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
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
                <TextAreaField>
                    <Label>Message:</Label>
                    <SCTextarea
                        cols="40"
                        rows="15"
                        placeholder="Enter your message:"
                    />
                </TextAreaField>
            </Container>
        );
    }
}
