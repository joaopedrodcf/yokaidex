import styled from 'styled-components';

export const ProgressBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 12px;
    color: ${props => props.theme.theme().color};
    font-weight: 600;
    text-transform: uppercase;

    div:nth-child(1) {
        width: 12.5%;
    }

    div:nth-child(2) {
        width: 12.5%;
    }
`;

export const Bar = styled.div`
    width: 100%;
    height: 10px;
    background-color: #bdbdbd;
    border-radius: 12px;

    div {
        height: 10px;
        border-radius: 12px;
    }
`;
