import styled from 'styled-components';

export const Table = styled.table`
    width: 100%;
    font-weight: 600;
    table-layout: fixed;
    border-radius: 12px;
    border-collapse: collapse;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
        0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);

    tr a {
        display: block;
        width: 100%;
    }

    td div {
        display: flex;
        flex-direction: column;
    }

    th {
        padding: 16px;
        color: ${props => props.theme.theme().bg};
        text-align: center;
        background-color: ${props => props.theme.theme().fg};
    }

    td {
        padding: 8px;
        color: ${props => props.theme.theme().fg};
        text-align: start;
        background-color: ${props => props.theme.theme().bg};
    }

    tr {
        border-bottom: 1px solid #bdbdbd;
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
