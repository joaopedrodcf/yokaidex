/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import variables from '../../../styles/variables';

export const SCSideInformation = styled.div`
    position: absolute;
    top: 68px;
    right: ${variables.spacers.s};
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${props => props.theme.color};

    > div,
    > img {
        margin-top: ${variables.spacers.xs};
    }

    @media (min-width: ${variables.breakpoints.md}) {
        padding: ${variables.spacers.s} 125px;
    }

    @media (min-width: ${variables.breakpoints.lg}) {
        padding: ${variables.spacers.s} 400px;
    }
`;
