import styled from 'styled-components';

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Label = styled.label`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 6px;
    color: ${props => props.theme.theme().fg};
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

    > button {
        background-color: ${props => props.theme.theme().fg};
        color: ${props => props.theme.theme().bg};
    }

    @media (min-width: 576px) {
        width: 576px;
    }
`;
