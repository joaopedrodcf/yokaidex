import styled from 'styled-components';

const Container = styled.div`
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
        padding: 12px 400px;
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
    margin: 12px 0;
`;

export const BigLabel = styled.div`
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

export const BigLabelContent = styled.div`
    font-size: 20px;
    font-weight: 600;
    display: flex;
    align-items: center;

    text-transform: ${props => {
        if (props.uppercase) return 'uppercase';

        return '';
    }};
`;

export const SectionHeader = styled.div`
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

export default {
    Container,
    Section,
    BigLabel,
    BigLabelContent,
    SectionHeader
};
