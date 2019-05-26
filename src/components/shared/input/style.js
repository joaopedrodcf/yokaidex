import styled from 'styled-components';
import Styles from '../../../styles';

export const Container = styled.div`
    position: relative;
    width: ${props => props.isFullWidth && '100%'};
    margin: 0 0 12px 0;

    svg {
        position: absolute;
        top: 10px;
        left: 6px;
    }
`;

export const SCInput = styled.input`
    width: 100%;
    padding: ${props =>
        props.customPadding ? props.customPadding : '12px 32px'};
    color: ${Styles.color.black};
    font-size: 14px;
    border: 0.1rem solid ${Styles.color.black};
    border-radius: 4px;
    outline: none;

    :focus {
        border: 0.1rem solid #fdd835;
    }
`;

export default SCInput;
