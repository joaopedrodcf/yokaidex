import styled from 'styled-components';

export const Container = styled.div`
    background-color: #ffffff;
    color: #000000;
    padding: 56px 24px 24px 24px;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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
        text-align: center;
        padding: 8px;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
`;
