/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import variables from '../../styles/variables';

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: ${variables.spacers.s};
    color: ${(props) => props.theme.color};
    text-align: justify;
`;
