import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SCSidebar = styled.div`
    width: 256px;
    height: 100%;
    background-color: ${props => props.theme.theme().bg};

    * {
        color: ${props => props.theme.theme().fg};
        font-weight: 500;
        font-size: 18px;
        text-align: start;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SCNavLink = styled(NavLink).attrs({
    activeClassName: 'active'
})`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 12px;
    text-decoration: none;
    background-color: ${props =>
        props.selected ? '#bdbdbd' : props.theme.theme().bg};
    transition: all 250ms ease-in-out;
    will-change: transform;

    svg {
        margin-right: 12px;
        fill: ${props => (props.selected ? 'black' : '')};
    }

    &:hover {
        background-color: ${props => (props.version ? '#bdbdbd' : '#fdd835')};
    }

    &.active {
        background-color: ${props => (props.version ? '#bdbdbd' : '#fdd835')};
    }
`;

export const SCLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 12px;
    text-decoration: none;
    background-color: ${props => props.theme.theme().bg};
    transition: all 250ms ease-in-out;
    will-change: transform;

    svg {
        margin-right: 12px;
    }

    &:hover {
        background-color: #fdd835;
    }

    &.active {
        background-color: #fdd835;
    }
`;

export const Sections = styled.div`
    display: flex;
    flex-direction: column;
    margin: ${props => (props.showMargin ? '12px 0' : '')};
    border-top: ${props => (props.showBorder ? '2px solid #bdbdbd' : '')};
`;

export const SectionsHeader = styled.div`
    padding: 6px 12px 12px 12px;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    background-color: ${props => props.theme.theme().bg};
`;

export const ToggleSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 12px;
    text-decoration: none;
    background-color: ${props => props.theme.theme().bg};
    transition: all 250ms ease-in-out;
    will-change: transform;
`;

export const ToggleText = styled.div`
    margin-left: 12px;
    color: ${props => props.theme.theme().fg};
`;
