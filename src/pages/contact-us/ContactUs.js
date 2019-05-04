import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Send from 'react-feather/dist/icons/send';
import { Container, Field, Label, SCTextarea, ButtonArea } from './style';
import Button from '../../components/shared/button';
import endpoints from '../../Services/services';
import SCInput from '../../components/shared/input';
import { withGameVersionContext } from '../../store';

class ContactUs extends Component {
    constructor() {
        super();

        this.initialState = {
            name: '',
            subject: '',
            email: '',
            message: ''
        };

        this.state = this.initialState;

        this.handleText = this.handleText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleText(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    async handleSubmit() {
        const { name, email, subject, message } = this.state;
        const { context } = this.props;
        const endpoint = endpoints.mailEndpoint;

        await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, subject, message })
        })
            .then(() => {
                this.setState(this.initialState, () => {
                    setTimeout(() => {
                        const { history } = this.props;

                        history.push(`/yokai-watch-${context.gameVersion}`);
                    }, 500);
                });
            })
            .catch(() => {
                this.setState(this.initialState, () => {
                    setTimeout(() => {
                        const { history } = this.props;

                        history.push(`/yokai-watch-${context.gameVersion}`);
                    }, 500);
                });
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
                        isFullWidth
                        customPadding="12px"
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
                        isFullWidth
                        customPadding="12px"
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
                        isFullWidth
                        customPadding="12px"
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
                        width="100%"
                    >
                        <Send size={18} />
                    </Button>
                </ButtonArea>
            </Container>
        );
    }
}

export default withRouter(withGameVersionContext(ContactUs));
