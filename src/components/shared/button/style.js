/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import variables from '../../../styles/variables';

export const SCButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${variables.spacers.s} ${variables.spacers.m};
    color: ${(props) => props.theme.button.color};
    background-color: ${(props) => props.theme.button.backgroundColor};
    border: 0;
    border-radius: ${variables.spacers.xxs};
    outline: none;
    cursor: pointer;

    svg {
        margin-left: ${variables.spacers.s};
    }
`;
