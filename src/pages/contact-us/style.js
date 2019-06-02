import styled from 'styled-components';
import Styles from '../../styles';

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Label = styled.label`
    margin-bottom: 6px;
    color: ${props => props.theme.theme().color};
    font-weight: 600;
    font-size: 18px;
`;

export const SCTextarea = styled.textarea`
    width: 100%;
    padding: 12px;
    color: ${Styles.color.black};
    font-size: 14px;
    border: 2px solid ${Styles.color.black};
    border-radius: 4px;
    outline: none;

    :focus {
        border: 2px solid #fdd835;
    }
`;

export const ButtonArea = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 32px 0;

    > button {
        color: ${props => props.theme.theme().button.color};
        background-color: ${props =>
            props.theme.theme().button.backgroundColor};
    }

    @media (min-width: 576px) {
        width: 576px;
    }
`;
