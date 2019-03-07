import React, { Component } from 'react';
import { Container, Field, Label } from './style';
import { SCInput } from '../shared/input/style';

export default class ContactUs extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            subject: '',
            mail: '',
            message: ''
        };
    }

    render() {
        const { name, mail, subject, message } = this.props;
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
                    <Label>Mail:</Label>
                    <SCInput
                        id="mail"
                        name="mail"
                        value={mail}
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
                    <SCInput
                        id="message"
                        name="message"
                        value={message}
                        onChange={this.handleText}
                        placeholder="Enter your message:"
                    />
                </Field>
            </Container>
        );
    }
}
