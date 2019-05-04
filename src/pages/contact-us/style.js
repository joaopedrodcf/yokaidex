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

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Label = styled.div`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 6px;
`;

export const SCTextarea = styled.textarea`
    border: 2px solid #000000;
    border-radius: 4px;
    outline: none;
    color: #000000;
    padding: 12px;
    width: 100%;
    font-size: 14px;

    :focus {
        border: 2px solid #fdd835;
    }
`;

export const ButtonArea = styled.div`
    display: flex;
    justify-content: center;
    margin: 32px 0;
    width: 100%;

    @media (min-width: 576px) {
        width: 576px;
    }
`;
