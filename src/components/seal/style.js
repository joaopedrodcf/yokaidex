import styled from 'styled-components';

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
    padding: 12px;
    font-weight: 600;
    font-size: 16px;

    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: inherit;
        text-decoration: inherit;
    }

    @media (min-width: 576px) {
        width: 25%;
    }
`;
