import React, { Component } from 'react';
import { SCSidebar, SCHeader, Container } from './style';

import Button from '../shared/button';

class Sidebar extends Component {
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
            <SCSidebar>
                <SCHeader />
                <Container>
                    <Button
                        label="Yokai watch 1"
                        type="button"
                        version="1"
                        onClick={this.handleChangeGameVersion}
                        size="small"
                    />
                    <Button
                        label="Yokai watch 2"
                        type="button"
                        version="2"
                        onClick={this.handleChangeGameVersion}
                        size="small"
                    />
                    <Button
                        label="Yokai watch 3"
                        type="button"
                        version="3"
                        onClick={this.handleChangeGameVersion}
                        size="small"
                    />

                    <a to="/baffle-board">
                        <h5>Baffle board</h5>
                    </a>
                </Container>
            </SCSidebar>
        );
    }
}

export default Sidebar;
