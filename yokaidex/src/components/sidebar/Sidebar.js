/* eslint-disable react/destructuring-assignment */
import React, { useContext } from 'react';
import Book from 'react-feather/dist/icons/book';
import List from 'react-feather/dist/icons/list';
import Twitter from 'react-feather/dist/icons/twitter';
import Bookmark from 'react-feather/dist/icons/bookmark';
import Info from 'react-feather/dist/icons/info';
import Briefcase from 'react-feather/dist/icons/briefcase';
import Circle from 'react-feather/dist/icons/circle';
import Mail from 'react-feather/dist/icons/mail';
import {
    Wrapper,
    SCNavLink,
    SCLink,
    Sections,
    SectionsHeader,
    ToggleSection,
    ToggleText,
} from './style';
import ToggleSwitch from '../shared/toggle-switch';
import {
    GameVersionContext,
    YokaisContext,
    BaffleBoardContext,
    ItemsContext,
    CrankakaisContext,
    ThemeContext,
} from '../../store';

const Sidebar = () => {
    const { changeCrankakais } = useContext(CrankakaisContext);
    const { gameVersion, changeGameVersion } = useContext(GameVersionContext);
    const { changeBaffleBoard } = useContext(BaffleBoardContext);
    const { toggleTheme, isDarkTheme } = useContext(ThemeContext);
    const { changeItems } = useContext(ItemsContext);
    const { changeYokais } = useContext(YokaisContext);

    const handleChangeGameVersion = (event) => {
        const version = event.currentTarget.getAttribute('version');

        changeGameVersion(version);
        changeYokais(version);
        changeBaffleBoard(version);
        changeItems(version);
        changeCrankakais(version);
    };

    const checkIfSelected = (version) => {
        return gameVersion === version;
    };

    return (
        <Wrapper>
            <Sections>
                <SectionsHeader>Pages</SectionsHeader>
                <SCNavLink to={`/yokai-watch-${gameVersion}`} exact>
                    <Book /> Medallium
                </SCNavLink>

                {gameVersion !== '1' && (
                    <SCNavLink to={`/yokai-watch-${gameVersion}/baffle-board`}>
                        <List /> Baffle board
                    </SCNavLink>
                )}

                <SCNavLink to={`/yokai-watch-${gameVersion}/items`}>
                    <Briefcase /> Items
                </SCNavLink>
                <SCNavLink to={`/yokai-watch-${gameVersion}/crank-a-kai`}>
                    <Circle /> Crank-a-kai
                </SCNavLink>
                <SCLink href="https://twitter.com/yokaidex">
                    <Twitter /> Follow us
                </SCLink>
                <SCNavLink to={`/yokai-watch-${gameVersion}/contact-us`}>
                    <Mail /> Contact us
                </SCNavLink>
                <SCNavLink to={`/yokai-watch-${gameVersion}/about-us`}>
                    <Info /> About us
                </SCNavLink>
            </Sections>
            <Sections showBorder>
                <SectionsHeader>Game Version</SectionsHeader>
                <SCNavLink
                    to="/yokai-watch-1"
                    version="1"
                    selected={checkIfSelected('1')}
                    onClick={handleChangeGameVersion}
                >
                    <Bookmark /> Yo-kai watch 1
                </SCNavLink>
                <SCNavLink
                    to="/yokai-watch-2"
                    version="2"
                    selected={checkIfSelected('2')}
                    onClick={handleChangeGameVersion}
                >
                    <Bookmark /> Yo-kai watch 2
                </SCNavLink>
                <SCNavLink
                    to="/yokai-watch-3"
                    selected={checkIfSelected('3')}
                    version="3"
                    onClick={handleChangeGameVersion}
                >
                    <Bookmark /> Yo-kai watch 3
                </SCNavLink>
            </Sections>
            <Sections showBorder>
                <SectionsHeader>Theme</SectionsHeader>
                <ToggleSection>
                    <ToggleSwitch
                        onChange={toggleTheme}
                        checked={isDarkTheme}
                    />
                    <ToggleText>Dark Theme</ToggleText>
                </ToggleSection>
            </Sections>
        </Wrapper>
    );
};

export default Sidebar;
