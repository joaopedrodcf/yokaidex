import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Container,
    SCHeader,
    SCLabel,
    SCSidebar,
    SCNavLink,
    SCLink,
    Image,
    Sections,
    SectionsHeader
} from './style';

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

    checkIfSelected(version) {
        const { gameVersion } = this.props;

        return Number(gameVersion) === version;
    }

    render() {
        const { gameVersion } = this.props;
        return (
            <SCSidebar>
                <SCHeader>
                    <Image
                        src="https://res.cloudinary.com/dcrcweea8/image/upload/v1551482504/Yokai/misc/icon-256x256.png"
                        alt=""
                    />
                </SCHeader>
                <Container>
                    <Sections showMargin>
                        <SCNavLink to={`/yokai-watch-${gameVersion}`} exact>
                            <FontAwesomeIcon icon="home" /> Home
                        </SCNavLink>

                        {gameVersion !== '1' && (
                            <SCNavLink
                                to={`/yokai-watch-${gameVersion}/baffle-board`}
                            >
                                <FontAwesomeIcon icon="list-ul" /> Baffle board
                            </SCNavLink>
                        )}

                        <SCLink href="https://github.com/joaopedrodcf/yokaidex">
                            <FontAwesomeIcon icon="hands-helping" /> Contribute
                        </SCLink>

                        <SCNavLink to={`/yokai-watch-${gameVersion}/about-us`}>
                            <FontAwesomeIcon icon="info-circle" /> About us
                        </SCNavLink>
                    </Sections>
                    <Sections showBorder>
                        <SectionsHeader>Game Version</SectionsHeader>
                        <SCLabel
                            selected={this.checkIfSelected(1)}
                            role="presentation"
                            version="1"
                            onClick={this.handleChangeGameVersion}
                        >
                            <FontAwesomeIcon icon="cat" /> Yo-kai watch 1
                        </SCLabel>
                        <SCLabel
                            selected={this.checkIfSelected(2)}
                            role="presentation"
                            version="2"
                            onClick={this.handleChangeGameVersion}
                        >
                            <FontAwesomeIcon icon="dog" /> Yo-kai watch 2
                        </SCLabel>
                        <SCLabel
                            selected={this.checkIfSelected(3)}
                            role="presentation"
                            version="3"
                            onClick={this.handleChangeGameVersion}
                        >
                            <FontAwesomeIcon icon="dragon" /> Yo-kai watch 3
                        </SCLabel>
                    </Sections>
                </Container>
            </SCSidebar>
        );
    }
}

export default Sidebar;
