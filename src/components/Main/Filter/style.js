import styled from 'styled-components';

export const Filters = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 12px 0 24px 0;
`;

export const Container = styled.div`
    background-color: #ffffff;
    color: #000000;
    padding: 12px;
    margin-top: 56px;
    font-size: 16px;

    input[type='text'] {
        border: 0.1rem solid #9e9e9e;
        border-radius: 4px;
        outline: none;
        padding: 0 12px;
        height: 48px;
        width: 100%;
        color: #212121;
        margin: 12px 0 24px 0;
    }

    h5 {
        letter-spacing: 0;
        font-size: 24px;
        font-weight: 400;
    }
`;

export const InputContainer = styled.div`
    padding: 6px 0;
`;
export const Collapsible = styled.div`
    display: flex;
    flex-direction: column;
    div {
        display: ${props => (props.isCollapsed ? 'none' : 'block')};
    }
`;
