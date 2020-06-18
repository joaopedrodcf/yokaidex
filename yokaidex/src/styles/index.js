import styled from 'styled-components';
import variables from './variables';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 56px;
    padding: ${variables.spacers.s};
    color: ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.backgroundColor};
    ${variables.typographys.m};

    @media (min-width: ${variables.breakpoints.md}) {
        padding: ${variables.spacers.s} 125px;
    }

    @media (min-width: ${variables.breakpoints.lg}) {
        padding: ${variables.spacers.s} 400px;
    }
`;

export const Section = styled.div`
    display: flex;
    flex-direction: ${(props) => {
        if (props.isRow) return 'row';

        return 'column';
    }};
    align-items: flex-start;
    justify-content: ${(props) => {
        if (props.justifyContent) return props.justifyContent;

        return 'column';
    }};
    width: 100%;
    margin: ${variables.spacers.s} 0;
    color: ${variables.colors.black};
`;

export const BigLabel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${(props) => {
        if (props.justifyContent) return props.justifyContent;

        return 'space-between';
    }};
    width: ${(props) => {
        if (props.width) return props.width;
        if (props.withoutWith) return '';

        return '45%';
    }};
    padding: ${variables.spacers.xxs} ${variables.spacers.s};
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
    border-radius: ${variables.spacers.m};
    box-shadow: ${variables.shadows.s};
`;

export const BigLabelContent = styled.div`
    display: flex;
    align-items: center;
    text-transform: ${(props) => props.uppercase && 'uppercase'};
    ${variables.typographys.mBold};
`;

export const SectionHeader = styled.div`
    margin-bottom: ${variables.spacers.s};
    padding: ${variables.spacers.xs} ${variables.spacers.m};
    background-color: ${(props) => props.color};
    border-radius: ${variables.spacers.m};
    box-shadow: ${variables.shadows.s};
    ${variables.typographys.lBold};
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    text-align: center;
    background-color: ${(props) => props.theme.card.backgroundColor};
    border-radius: ${variables.spacers.s};
    box-shadow: ${variables.shadows.s};
`;

export const CardTitle = styled.div`
    padding: ${variables.spacers.xs};
    background-color: ${(props) => props.color};
    border-radius: ${variables.spacers.s} ${variables.spacers.s} 0 0;
    ${variables.typographys.lBold};
`;

export const CardText = styled.div`
    display: flex;
    flex-direction: ${(props) => {
        if (props.isRow) return 'row';

        return 'column';
    }};
    align-items: center;
    justify-content: center;
    padding: ${variables.spacers.s};
    color: ${(props) => props.theme.color};
    border-radius: 0 0 ${variables.spacers.s} ${variables.spacers.s};

    img {
        margin-right: ${variables.spacers.s};
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
};
