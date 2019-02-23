import styled from 'styled-components';

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ContainerEvolutions = styled.div`
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;

    ${Column} {
        margin: 0 12px;
        text-align: center;
    }

    a {
        color: inherit;
        text-decoration: inherit;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
