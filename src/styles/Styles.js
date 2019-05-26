import styled from 'styled-components';

const black = '#000000';
const white = '#ffffff';
const primary = '#fdd835';

export const color = {
    black,
    white,
    primary
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 56px;
    padding: 12px;
    color: ${color.black};
    font-size: 16px;
    background-color: ${props => props.theme.theme().bg};

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
    align-items: flex-start;
    justify-content: ${props => {
        if (props.justifyContent) return props.justifyContent;

        return 'column';
    }};
    width: 100%;
    margin: 12px 0;
`;

export const BigLabel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${props => {
        if (props.justifyContent) return props.justifyContent;

        return 'space-between';
    }};
    width: ${props => {
        if (props.width) return props.width;
        if (props.withoutWith) return '';

        return '45%';
    }};
    padding: 4px 12px;
    color: ${props => {
        if (props.color) return props.color;

        return '';
    }};
    background-color: ${props => {
        if (props.backgroundColor) return props.backgroundColor;

        return '';
    }};
    border-radius: 18px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const BigLabelContent = styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 20px;
    text-transform: ${props => {
        if (props.uppercase) return 'uppercase';

        return '';
    }};
`;

export const SectionHeader = styled.div`
    margin-bottom: 12px;
    padding: 8px 25px;
    font-weight: 600;
    background-color: ${props => {
        if (props.color) return props.color;

        return '';
    }};
    border-radius: 18px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    text-align: center;
    border-radius: 12px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const CardTitle = styled.div`
    padding: 6px;
    font-weight: 600;
    font-size: 18px;
    background-color: ${props => {
        if (props.color) return props.color;

        return '';
    }};
    border-radius: 12px 12px 0 0;
`;

export const CardText = styled.div`
    padding: 12px;
    color: ${props => props.theme.theme().fg};
    font-size: 18px;
    border-radius: 0 0 12px 12px;
    img {
        margin-right: 12px;
    }
`;

export default {
    Container,
    Section,
    BigLabel,
    BigLabelContent,
    SectionHeader,
    Card,
    CardTitle,
    CardText,
    color
};
