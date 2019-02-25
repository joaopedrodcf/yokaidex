import styled from 'styled-components';

export const Container = styled.div`
    background-color: #ffffff;
    color: #000000;
    padding: 12px;
    margin-top: 56px;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 960px) {
        padding: 12px 125px;
    }

    @media (min-width: 1280px) {
        padding: 12px 250px;
    }

    @media (min-width: 1444px) {
        padding: 12px 500px;
    }
`;

export const Table = styled.table`
    width: 100%;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
        0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    border-radius: 12px;
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
        padding: 16px;
        text-align: center;
    }

    td {
        padding: 8px;
        text-align: start;
    }

    tr {
        border-bottom: 1px solid lightgray;
    }

    tr:last-child th:first-child {
        border-top-left-radius: 12px;
    }

    tr:last-child th:last-child {
        border-top-right-radius: 12px;
    }

    tr:last-child td:first-child {
        border-bottom-left-radius: 12px;
    }

    tr:last-child td:last-child {
        border-bottom-right-radius: 12px;
    }

    td:last-child {
        text-align: center;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
