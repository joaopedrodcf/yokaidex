import styled from 'styled-components';

const Container = styled.div`
    background-color: #fdd835;
    height: 56px;
    width: 100%;
    z-index: 1;
    color: #000000;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

    font-size: 24px;
    display: flex;
    align-items: center;
    position: fixed;
    border-bottom-left-radius: 50% 20%;
    border-bottom-right-radius: 50% 20%;

    div {
        padding: 12px;
    }

    h1 {
        font-size: 28px;
        letter-spacing: 4px;
        font-weight: 700;
    }

    a {
        text-decoration: none;
        color: #000000;
        display: flex;
        align-items: center;
    }

    a:hover {
        text-decoration: none;
        cursor: pointer;
        color: #403b3b;
    }
`;

export default Container;
