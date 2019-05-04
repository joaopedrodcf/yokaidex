import styled from 'styled-components';

const SCButton = styled.button`
    border: 0;
    border-radius: 4px;
    background-color: #1b1919;
    color: #fffafa;
    outline: none;
    transition: all 0.3s ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        margin-left: 10px;
    }

    padding: ${props => (props.size ? '24px 48px' : '12px 24px')};

    padding: ${props => {
        if (props.size === 'large') return '24px 48px';
        return '12px 24px';
    }};

    font-size: ${props => {
        if (props.size === 'large') return '20px';
        return '14px';
    }};

    width: ${props => (props.width ? props.width : '12px 24px')};
`;

export default SCButton;
