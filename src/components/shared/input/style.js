import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    margin: 0 0 12px 0;

    svg {
        position: absolute;
        top: 10px;
        left: 6px;
    }
`;

export const SCInput = styled.input`
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

export default SCInput;
