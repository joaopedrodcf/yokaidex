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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 12px;
    color: ${props => props.theme.color};

    ${Column} {
        margin: 0 12px;
        text-align: center;
    }

    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: inherit;
        text-decoration: inherit;
    }
`;
