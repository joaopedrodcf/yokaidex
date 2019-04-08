import styled from 'styled-components';

export const Container = styled.div`
    background-color: #ffffff;
    color: #000000;
    padding: 12px;
    margin-top: 56px;
    font-size: 16px;

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

export const ContainerHeader = styled.div`
    padding: 12px 20px;
`;

export const Filters = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px;

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
    display: flex;
    flex-direction: row;
    width: 50%;
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
    width: 50%;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const SpecialHeader = styled.div`
    border-bottom: 2px solid #fdd835;
    display: flex;
    justify-content: space-between;
    padding-top: 12px;
    margin-bottom: 12px;

    h2 {
        font-size: 18px;
        font-weight: 700;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: ${props => {
        if (props.justifyContent) return props.justifyContent;

        return '';
    }};

    align-items: ${props => {
        if (props.alignItems) return props.alignItems;

        return '';
    }};
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: ${props => {
        if (props.justifyContent) return props.justifyContent;

        return '';
    }};

    align-items: ${props => {
        if (props.alignItems) return props.alignItems;

        return '';
    }};
`;

export const FilterButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    > button:nth-child(1) {
        margin-right: 12px;
    }
`;

export const Section = styled.div`
    display: flex;

    flex-direction: ${props => {
        if (props.isRow) return 'row';

        return 'column';
    }};

    justify-content: ${props => {
        if (props.justifyContent) return props.justifyContent;

        return 'column';
    }};

    width: 100%;
    align-items: flex-start;
    margin: 0 0 12px 0;

    a {
        width: 100%;
        color: inherit;
        text-decoration: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    text-align: start;
    border-radius: 12px;
    padding: 12px;
    align-items: center;
    font-weight: 600;
    font-size: 18px;
`;

export const SectionImageTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    text-align: center;
`;
