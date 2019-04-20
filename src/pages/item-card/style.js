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

    img {
        margin-bottom: 24px;
    }

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
    flex-direction: column;
    justify-content: center;
    width: 100%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    text-align: center;
    border-radius: 12px;
`;

export const STableTitle = styled.div`
    background-color: ${props => {
        if (props.color) return props.color;

        return '';
    }};

    font-weight: 600;
    font-size: 18px;
    border-radius: 12px 12px 0 0;
    padding: 6px;
`;

export const STableText = styled.div`
    font-size: 18px;
    padding: 12px;
    border-radius: 0 0 12px 12px;

    img {
        margin-right: 12px;
    }
`;

export const SLabel = styled.div`
    background-color: ${props => {
        if (props.backgroundColor) return props.backgroundColor;

        return '';
    }};

    color: ${props => {
        if (props.color) return props.color;

        return '';
    }};

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 45%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    text-align: center;
    border-radius: 18px;
    padding: 4px 12px;
`;

export const SLabelText = styled.div`
    font-size: 20px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;

    text-transform: ${props => {
        if (props.uppercase) return 'uppercase';

        return '';
    }};
`;

export const ContainerSeal = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 100%;
`;

export const SealElements = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    padding: 12px;
    width: 50%;

    a {
        color: inherit;
        text-decoration: inherit;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 576px) {
        width: 25%;
    }
`;

export const Label = styled.div`
    background-color: ${props => {
        if (props.color) return props.color;

        return '';
    }};

    border-radius: 18px;
    padding: 8px 25px;
    font-weight: 600;
    margin-bottom: 12px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
