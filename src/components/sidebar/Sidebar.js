import React, { Component } from 'react';

import Book from 'react-feather/dist/icons/book';
import List from 'react-feather/dist/icons/list';
import DollarSign from 'react-feather/dist/icons/dollar-sign';
import Twitter from 'react-feather/dist/icons/twitter';
import Bookmark from 'react-feather/dist/icons/bookmark';
import Info from 'react-feather/dist/icons/info';
import Briefcase from 'react-feather/dist/icons/briefcase';
import Circle from 'react-feather/dist/icons/circle';
import Mail from 'react-feather/dist/icons/mail';
import {
    Container,
    SCSidebar,
    SCNavLink,
    SCLink,
    Sections,
    SectionsHeader,
    ToggleSection,
    ToggleText
} from './style';
import ToggleSwitch from '../shared/toggle-switch/ToggleSwitch';
import {
    withGameVersionContext,
    withSidebarContext,
    withYokaisContext,
    withBaffleBoardContext,
    withItemsContext,
    withCrankakaisContext,
    withThemeContext
} from '../../store';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        const { context } = this.props;

        this.state = {
            toggleEnabled: context.theme
        };

        this.handleChangeGameVersion = this.handleChangeGameVersion.bind(this);
        this.checkIfSelected = this.checkIfSelected.bind(this);
        this.handleChangeTheme = this.handleChangeTheme.bind(this);
    }

    handleChangeGameVersion(event) {
        const version = event.currentTarget.getAttribute('version');
        const { context } = this.props;

        context.changeGameVersion(version);
        context.setYokais(version);
        context.setBaffleBoard(version);
        context.setItems(version);
        context.setCrankakais(version);
    }

    checkIfSelected(version) {
        const { context } = this.props;

        return context.gameVersion === version;
    }

    handleChangeTheme() {
        const { context } = this.props;

        this.setState(state => ({
            toggleEnabled: !state.toggleEnabled
        }));

        context.toggleTheme();
    }

    render() {
        const { context } = this.props;
        const { toggleEnabled } = this.state;
        return (
            <SCSidebar>
                <Container>
                    <Sections>
                        <SectionsHeader>Pages</SectionsHeader>
                        <SCNavLink
                            to={`/yokai-watch-${context.gameVersion}`}
                            exact
                        >
                            <Book /> Medallium
                        </SCNavLink>

                        {context.gameVersion !== '1' && (
                            <SCNavLink
                                to={`/yokai-watch-${
                                    context.gameVersion
                                }/baffle-board`}
                            >
                                <List /> Baffle board
                            </SCNavLink>
                        )}

                        <SCNavLink
                            to={`/yokai-watch-${context.gameVersion}/items`}
                        >
                            <Briefcase /> Items
                        </SCNavLink>
                        <SCNavLink
                            to={`/yokai-watch-${
                                context.gameVersion
                            }/crank-a-kai`}
                        >
                            <Circle /> Crank-a-kai
                        </SCNavLink>

                        <SCLink href="https://www.patreon.com/yokaidex">
                            <DollarSign /> Help us
                        </SCLink>

                        <SCLink href="https://twitter.com/yokaidex">
                            <Twitter /> Follow us
                        </SCLink>
                        <SCNavLink
                            to={`/yokai-watch-${
                                context.gameVersion
                            }/contact-us`}
                        >
                            <Mail /> Contact us
                        </SCNavLink>
                        <SCNavLink
                            to={`/yokai-watch-${context.gameVersion}/about-us`}
                        >
                            <Info /> About us
                        </SCNavLink>
                    </Sections>
                    <Sections showBorder>
                        <SectionsHeader>Game Version</SectionsHeader>
                        <SCNavLink
                            to="/yokai-watch-1"
                            version="1"
                            selected={this.checkIfSelected('1')}
                            onClick={this.handleChangeGameVersion}
                        >
                            <Bookmark /> Yo-kai watch 1
                        </SCNavLink>
                        <SCNavLink
                            to="/yokai-watch-2"
                            version="2"
                            selected={this.checkIfSelected('2')}
                            onClick={this.handleChangeGameVersion}
                        >
                            <Bookmark /> Yo-kai watch 2
                        </SCNavLink>
                        <SCNavLink
                            to="/yokai-watch-3"
                            selected={this.checkIfSelected('3')}
                            version="3"
                            onClick={this.handleChangeGameVersion}
                        >
                            <Bookmark /> Yo-kai watch 3
                        </SCNavLink>
                    </Sections>
                    <Sections showBorder>
                        <SectionsHeader>Theme</SectionsHeader>
                        <ToggleSection>
                            <ToggleSwitch
                                onChange={context.toggleTheme}
                                checked={context.isDefaultTheme}
                            />
                            <ToggleText>
                                {toggleEnabled ? 'Default theme' : 'Dark Theme'}
                            </ToggleText>
                        </ToggleSection>
                    </Sections>
                </Container>
            </SCSidebar>
        );
    }
}

export default withThemeContext(
    withGameVersionContext(
        withSidebarContext(
            withYokaisContext(
                withBaffleBoardContext(
                    withItemsContext(withCrankakaisContext(Sidebar))
                )
            )
        )
    )
);
