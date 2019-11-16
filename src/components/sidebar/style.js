import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import variables from '../../styles/variables';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 256px;
    height: 100%;
    padding-top: ${variables.generic.headerHeight};

    ${({ theme }) => {
        return css`
            color: ${theme.color};
            background-color: ${theme.backgroundColor};
        `;
    }}

    * {
        ${variables.typographys.l};
        text-align: start;
    }
`;

export const SCNavLink = styled(NavLink).attrs({
    activeClassName: 'active'
})`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: ${variables.spacers.s};
    text-decoration: none;

    ${({ theme, selected, version }) => {
        return css`
            color: ${theme.color};
            background-color: ${selected && theme.backgroundColor};

            svg {
                margin-right: ${variables.spacers.s};
                fill: ${selected && theme.selected.color};
            }

            &:hover {
                color: ${version
                    ? theme.selected.color
                    : variables.colors.black};
                background-color: ${version
                    ? theme.selected.backgroundColor
                    : variables.colors.primary};
            }

            &.active {
                color: ${version
                    ? theme.selected.color
                    : variables.colors.black};
                background-color: ${version
                    ? theme.selected.backgroundColor
                    : variables.colors.primary};
            }
        `;
    }}
`;

export const SCLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: ${variables.spacers.s};
    text-decoration: none;

    ${({ theme }) => {
        return css`
            color: ${theme.color};
            background-color: ${theme.backgroundColor};
        `;
    }}

    svg {
        margin-right: ${variables.spacers.s};
    }

    &:hover {
        color: ${variables.colors.black};
        background-color: #fdd835;
    }

    &.active {
        color: ${variables.colors.black};
        background-color: #fdd835;
    }
`;

export const Sections = styled.div`
    display: flex;
    flex-direction: column;
    border-top: ${props => props.showBorder && '2px solid #bdbdbd'};
`;

export const SectionsHeader = styled.div`
    padding: ${variables.spacers.xs} ${variables.spacers.s}
        ${variables.spacers.s} ${variables.spacers.s};

    ${variables.typographys.mTitle};
    font-weight: 600;
    background-color: ${props => props.theme.backgroundColor};
`;

export const ToggleSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: ${variables.spacers.s};
    text-decoration: none;
    background-color: ${props => props.theme.backgroundColor};
    transition: all 250ms ease-in-out;
    will-change: transform;
`;

export const ToggleText = styled.div`
    margin-left: ${variables.spacers.s};
    color: ${props => props.theme.color};
`;
