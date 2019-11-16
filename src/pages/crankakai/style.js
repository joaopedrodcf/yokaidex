import styled from 'styled-components';
import variables from '../../styles/variables';

export const ContainerSeal = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 100%;
`;

export const SealElements = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    padding: ${variables.spacers.s};
    color: ${props => props.theme.color};
    ${variables.typographys.m}

    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: inherit;
        text-decoration: inherit;
    }

    @media (min-width: ${variables.breakpoints.sm}) {
        width: 25%;
    }
`;
