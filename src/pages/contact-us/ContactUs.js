import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Send from 'react-feather/dist/icons/send';
import { Helmet } from 'react-helmet';
import { Field, Label, SCTextarea, ButtonArea } from './style';
import Button from '../../components/shared/button';
import endpoints from '../../services/services';
import Input from '../../components/shared/input';
import { withGameVersionContext } from '../../store';
import Global from '../../styles';
import withTracker from '../../components/shared/with-tracker';

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
    }

    handleText = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = async () => {
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
    };

    render() {
        const { name, email, subject, message } = this.state;

        return (
            <Global.Container>
                <Helmet>
                    <title>
                        ContactUs | Yokaidex - Where you can find all the
                        information from Yo-kai Watch games!
                    </title>
                </Helmet>
                <Field>
                    <Label for="name">Name:</Label>
                    <Input
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
                    <Label for="email">Email:</Label>
                    <Input
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
                    <Label for="subject">Subject:</Label>
                    <Input
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
                    <Label for="message">Message:</Label>
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
            </Global.Container>
        );
    }
}

export default withRouter(withGameVersionContext(withTracker(ContactUs)));
