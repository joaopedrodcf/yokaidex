import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SCSidebar = styled.div`
    width: 256px;
    height: 100%;
    background-color: #ffffff;

    * {
        color: #000000;
        font-size: 18px;
        font-weight: 500;
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
    text-decoration: none;
    transition: all 250ms ease-in-out;
    will-change: transform;
    padding: 12px;
    background-color: ${props => (props.selected ? 'lightgray' : '#ffffff')};
    display: flex;
    justify-content: flex-start;
    align-items: center;

    svg {
        margin-right: 12px;
        fill: ${props => (props.selected ? 'black' : '')};
    }

    &:hover {
        background-color: ${props => (props.version ? 'lightgray' : '#fdd835')};
    }
    &.active {
        background-color: ${props => (props.version ? 'lightgray' : '#fdd835')};
    }
`;

export const SCLink = styled.a`
    text-decoration: none;
    transition: all 250ms ease-in-out;
    will-change: transform;
    padding: 12px;
    background-color: #ffffff;
    display: flex;
    justify-content: flex-start;
    align-items: center;

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
    border-top: ${props => (props.showBorder ? '2px solid gray' : '')};
    margin: ${props => (props.showMargin ? '12px 0' : '')};
`;

export const SectionsHeader = styled.div`
    font-weight: 600;
    text-transform: uppercase;
    font-size: 14px;
    padding: 6px 12px 12px 12px;
`;
