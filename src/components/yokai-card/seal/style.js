import styled from 'styled-components';
import variables from '../../../styles/variables';

export const Requirements = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 100%;
`;

export const Requirement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    padding: ${variables.spacers.s};
    ${variables.typographys.mBold};

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
