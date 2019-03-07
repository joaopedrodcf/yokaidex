import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    @media (min-width: 960px) {
        padding: 12px 125px;
    }

    @media (min-width: 1280px) {
        padding: 12px 250px;
    }

    @media (min-width: 1444px) {
        padding: 12px 500px;
    }
`;

export const Field = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: baseline;
    padding: 1rem;
    input {
        width: 80%;
    }
`;

export const Label = styled.div`
    margin-right: 1rem;
`;
