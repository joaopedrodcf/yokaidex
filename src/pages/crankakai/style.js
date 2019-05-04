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
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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

    align-items: flex-start;
    margin: 6px;

    width: 100%;
    @media (min-width: 576px) {
        width: 40%;
    }

    @media (min-width: 960px) {
        width: 40%;
    }

    @media (min-width: 1280px) {
        width: 20%;
    }

    @media (min-width: 1444px) {
        width: 20%;
    }

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
`;

export const SectionText = styled.div`
    font-weight: 600;
    font-size: 18px;
    margin-left: 12px;

    img {
        margin-right: 12px;
    }
`;

export const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
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
