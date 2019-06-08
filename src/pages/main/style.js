import styled from 'styled-components';
import styles from '../../styles';

export const Form = styled.form`
    width: 100%;
`;

export const ContainerHeader = styled.div`
    padding: 12px 20px;
`;

export const Filters = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px;
    color: ${props => props.theme.theme().color};

    @media (min-width: 576px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;

        > div {
            width: 50%;
            padding: 12px;
        }
    }
`;

export const Table = styled.table`
    width: 100%;
    font-weight: 600;
    table-layout: fixed;
    border-radius: 4px;
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
        color: #fffafa;
        background-color: #1b1919;
    }

    th,
    td {
        padding: 8px;
        text-align: center;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 50%;
    padding: 6px 0;
`;

export const Collapsible = styled.div`
    display: flex;
    flex-direction: column;

    ${Filters} {
        display: ${props => props.isCollapsed && 'none'};
    }

    ${InputContainer} {
        display: ${props => props.isCollapsed && 'none'};
    }

    button {
        margin-bottom: 12px;
    }
`;

export const CollapsibleFilters = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    ${InputContainer} {
        display: ${props => props.isCollapsed && 'none'};
    }
`;

export const FiltersColumn = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 50%;
`;

export const SpecialHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    padding-top: 12px;
    border-bottom: 2px solid #fdd835;

    h2 {
        font-weight: 700;
        font-size: 18px;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => {
        if (props.alignItems) return props.alignItems;

        return '';
    }};
    justify-content: ${props => props.justifyContent};
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: ${props => props.alignItems};
    justify-content: ${props => props.justifyContent};
`;

export const FilterButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    > button {
        color: ${props => props.theme.theme().button.color};
        background-color: ${props =>
            props.theme.theme().button.backgroundColor};
    }

    > button:nth-child(1) {
        margin-right: 12px;
    }
`;

export const Section = styled.div`
    display: flex;
    flex-direction: ${props => (props.isRow ? 'row' : 'column')};
    align-items: flex-start;
    justify-content: ${props => props.justifyContent};
    width: 100%;
    margin: 0 0 12px 0;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        color: inherit;
        text-decoration: inherit;
    }
`;

export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 12px;
    color: ${styles.color.black};
    font-weight: 600;
    font-size: 18px;
    text-align: start;
    border-radius: 12px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const SectionImageTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    text-align: center;
`;
