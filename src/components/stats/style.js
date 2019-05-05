import styled from 'styled-components';

export const ProgressBar = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 12px;

    div:nth-child(1) {
        width: 12.5%;
    }

    div:nth-child(2) {
        width: 12.5%;
    }
`;

export const Bar = styled.div`
    height: 10px;
    width: 100%;
    background-color: lightgrey;
    border-radius: 12px;

    div {
        border-radius: 12px;
        height: 10px;
    }
`;
