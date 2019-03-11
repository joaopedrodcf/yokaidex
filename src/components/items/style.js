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

export const Sections = styled.div`
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
    margin: 12px 0;
`;

export const STable = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    text-align: start;
    border-radius: 12px;
    padding: 6px;
    justify-content: start;
    align-items: center;
    font-weight: 600;
    font-size: 18px;
    background-color: #e1bee7;

    a {
        color: inherit;
        text-decoration: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const STableText = styled.div`
    font-weight: 600;
    font-size: 18px;
    margin-left: 12px;

    img {
        margin-right: 12px;
    }
`;
