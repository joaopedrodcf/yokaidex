import styled from 'styled-components';

export const Container = styled.div`
    background-color: #ffffff;
    color: #000000;
    padding: 56px 24px 24px 24px;
    font-size: 16px;

    input[type='text'] {
        border: 0.1rem solid #9e9e9e;
        border-radius: 4px;
        outline: none;
        padding: 0 12px;
        height: 48px;
        width: 100%;
        color: #212121;
        margin: 24px 0;
    }

    h5 {
        letter-spacing: 0;
        font-size: 24px;
        font-weight: 400;
    }
`;

export const Filters = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 24px 0;
`;

export const Filter = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Table = styled.table`
    margin: 24px 0;
    width: 100%;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
        0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    border-collapse: collapse;

    th {
        background-color: #ab000d;
        color: #ffffff;
    }

    th,
    td {
        text-align: left;
        padding: 8px;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
`;
