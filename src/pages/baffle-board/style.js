import styled from 'styled-components';
import variables from '../../styles/variables';

export const Table = styled.table`
    width: 100%;
    table-layout: fixed;
    border-radius: ${variables.spacers.s};
    border-collapse: collapse;
    box-shadow: ${variables.shadows.s};
    ${variables.typographys.mBold};

    tr a {
        display: block;
        width: 100%;
    }

    td div {
        display: flex;
        flex-direction: column;
    }

    th {
        padding: ${variables.spacers.s};
        color: ${props => props.theme.table.th.color};
        text-align: center;
        background-color: ${props => props.theme.table.th.backgroundColor};
        ${variables.typographys.l};
    }

    td {
        padding: ${variables.spacers.xs};
        color: ${props => props.theme.table.tr.color};
        text-align: start;
        background-color: ${props => props.theme.table.tr.backgroundColor};
    }

    tr {
        border-bottom: 1px solid #bdbdbd;
    }

    tr:last-child th:first-child {
        border-top-left-radius: ${variables.spacers.s};
    }

    tr:last-child th:last-child {
        border-top-right-radius: ${variables.spacers.s};
    }

    tr:last-child td:first-child {
        border-bottom-left-radius: ${variables.spacers.s};
    }

    tr:last-child td:last-child {
        border-bottom-right-radius: ${variables.spacers.s};
    }

    td:last-child {
        text-align: center;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
