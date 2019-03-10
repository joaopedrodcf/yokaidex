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
    justify-content: flex-start;
    align-items: baseline;
    padding: 1rem;
    input {
        display: flex;
        flex-direction: columm;
        width: 120%;
    }
`;
export const TextAreaField = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: baseline;
    padding: 1rem;
    input {
        display: flex;
        flex-direction: columm;
        width: 100%;
    }
`;

export const Label = styled.div`
    margin-right: 1rem;
    width: 20%;
`;

export const SCTextarea = styled.textarea`
    border: 0.1rem solid #000000;
    border-radius: 4px;
    outline: none;
    width: 100%;
    color: #000000;
    padding: 12px 32px;
    font-size: 14px;

    :focus {
        border: 0.1rem solid #fdd835;
    }
`;
