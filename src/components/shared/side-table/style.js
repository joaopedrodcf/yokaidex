import styled from 'styled-components';

const SCSideTable = styled.table`
    margin: 24px 0;
    width: 100%;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
        0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    border-collapse: collapse;
    table-layout: fixed;

    th {
        background-color: ${props => {
            if (props.color) return props.color;

            return '';
        }};
        color: #000000;
    }

    th,
    td {
        text-align: center;
        padding: 8px;
    }

    tbody tr {
        background-color: white;
    }
`;

export default SCSideTable;
