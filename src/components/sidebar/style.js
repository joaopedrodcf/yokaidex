import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import styles from '../../styles';

export const SCSidebar = styled.div`
    width: 256px;
    height: 100%;
    padding-top: 56px;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.backgroundColor};

    * {
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
    color: ${props => props.theme.color};
    text-decoration: none;
    background-color: ${props =>
        props.selected && props.theme.selected.backgroundColor};

    svg {
        margin-right: 12px;
        fill: ${props => props.selected && props.theme.selected.color};
    }

    &:hover {
        color: ${props =>
            props.version ? props.theme.selected.color : styles.color.black};
        background-color: ${props =>
            props.version
                ? props.theme.selected.backgroundColor
                : styles.color.primary};
    }

    &.active {
        color: ${props =>
            props.version ? props.theme.selected.color : styles.color.black};
        background-color: ${props =>
            props.version
                ? props.theme.selected.backgroundColor
                : styles.color.primary};
    }
`;

export const SCLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 12px;
    color: ${props => props.theme.color};
    text-decoration: none;
    background-color: ${props => props.theme.backgroundColor};

    svg {
        margin-right: 12px;
    }

    &:hover {
        color: ${styles.color.black};
        background-color: #fdd835;
    }

    &.active {
        color: ${styles.color.black};
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
    background-color: ${props => props.theme.backgroundColor};
`;

export const ToggleSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 12px;
    text-decoration: none;
    background-color: ${props => props.theme.backgroundColor};
    transition: all 250ms ease-in-out;
    will-change: transform;
`;

export const ToggleText = styled.div`
    margin-left: 12px;
    color: ${props => props.theme.color};
`;
