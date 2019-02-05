import styled from 'styled-components';

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

    @media (min-width: 960px) {
        padding: 12px 125px;
    }

    @media (min-width: 1280px) {
        padding: 12px 250px;
    }
`;

export const Filters = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 12px 0 24px 0;
`;

export const Table = styled.table`
    margin: 24px 0;
    width: 100%;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
        0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    border-collapse: collapse;
    table-layout: fixed;
    font-weight: 600;

    tr a {
        width: 100%;
        display: block;
    }

    td div {
        display: flex;
        flex-direction: column;
    }

    th {
        background-color: #1b1919;
        color: #fffafa;
    }

    th,
    td {
        text-align: center;
        padding: 8px;
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
