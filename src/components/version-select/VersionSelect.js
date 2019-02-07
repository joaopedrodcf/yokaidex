import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Container } from './style';
import Button from '../shared/button';

class VersionSelect extends Component {
    constructor(props) {
        super(props);

        this.handleChangeGameVersion = this.handleChangeGameVersion.bind(this);
    }

    handleChangeGameVersion(event) {
        const version = event.currentTarget.getAttribute('version');
        const { changeGameVersion } = this.props;

        changeGameVersion(version);
    }

    render() {
        return (
            <Container>
                <h1>Choose game:</h1>
                <h2>To change game after this just go into the sidebar</h2>
                <Button
                    label="Yokai watch 1"
                    type="button"
                    version="1"
                    onClick={this.handleChangeGameVersion}
                    size="large"
                />
                <Button
                    label="Yokai watch 2"
                    type="button"
                    version="2"
                    onClick={this.handleChangeGameVersion}
                    size="large"
                />
                <Button
                    label="Yokai watch 3"
                    type="button"
                    version="3"
                    onClick={this.handleChangeGameVersion}
                    size="large"
                />
            </Container>
        );
    }
}

export default withRouter(VersionSelect);
