import styled from 'styled-components';

const SCButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => (props.width ? props.width : '12px 24px')};
    padding: ${props => (props.size ? '24px 48px' : '12px 24px')};
    color: #fffafa;
    font-size: ${props => (props.size === 'large' ? '20px' : '14px')};
    background-color: #1b1919;
    border: 0;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease;

    svg {
        margin-left: 10px;
    }
`;

export default SCButton;
