import styled from 'styled-components';
import variables from '../../../styles/variables';

export const Requirements = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`;

export const Requirement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    padding: ${variables.spacers.s};
    color: ${props => props.theme.color};
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    border-radius: 0 0 ${variables.spacers.s} ${variables.spacers.s};

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
