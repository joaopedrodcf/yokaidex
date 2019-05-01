import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Container,
    SCHeader,
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

                        <SCNavLink to={`/yokai-watch-${gameVersion}/items`}>
                            <FontAwesomeIcon icon="list-ul" /> Items
                        </SCNavLink>

                        <SCNavLink
                            to={`/yokai-watch-${gameVersion}/equipments`}
                        >
                            <FontAwesomeIcon icon="list-ul" /> Equipments
                        </SCNavLink>

                        <SCLink href="https://www.patreon.com/yokaidex">
                            <FontAwesomeIcon icon="hands-helping" /> Help us
                        </SCLink>

                        <SCLink href="https://twitter.com/yokaidex">
                            <FontAwesomeIcon icon={['fab', 'twitter']} /> Follow
                            us
                        </SCLink>

                        <SCNavLink to={`/yokai-watch-${gameVersion}/about-us`}>
                            <FontAwesomeIcon icon="info-circle" /> About us
                        </SCNavLink>
                    </Sections>
                    <Sections showBorder>
                        <SectionsHeader>Game Version</SectionsHeader>
                        <SCNavLink
                            to="/yokai-watch-1"
                            version="1"
                            onClick={this.handleChangeGameVersion}
                        >
                            <FontAwesomeIcon icon="cat" /> Yo-kai watch 1
                        </SCNavLink>
                        <SCNavLink
                            to="/yokai-watch-2"
                            version="2"
                            onClick={this.handleChangeGameVersion}
                        >
                            <FontAwesomeIcon icon="dog" /> Yo-kai watch 2
                        </SCNavLink>
                        <SCNavLink
                            to="/yokai-watch-3"
                            selected={this.checkIfSelected(3)}
                            version="3"
                            onClick={this.handleChangeGameVersion}
                        >
                            <FontAwesomeIcon icon="dragon" /> Yo-kai watch 3
                        </SCNavLink>
                    </Sections>
                </Container>
            </SCSidebar>
        );
    }
}

export default Sidebar;
