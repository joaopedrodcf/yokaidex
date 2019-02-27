import styled from 'styled-components';

export const Container = styled.div`
    background-color: #ffffff;
    color: #000000;
    padding: 12px;
    margin-top: 56px;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;

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

export const SpecialDiv = styled.div`
    position: absolute;
    top: 68px;
    left: 12px;
    display: flex;
    flex-direction: column;

    div,
    img {
        margin-bottom: 42px;
    }

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

export const Stats = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
`;

export const Label = styled.div`
    background-color: ${props => {
        if (props.color) return props.color;

        return '';
    }};

    border-radius: 18px;
    padding: 8px 25px;
    font-weight: 600;
    margin-bottom: 12px;
`;

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
