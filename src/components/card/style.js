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
