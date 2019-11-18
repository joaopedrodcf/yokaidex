import styled from 'styled-components';
import variables from '../../../styles/variables';

export const Section = styled.div`
    display: flex;
    flex-direction: ${props => (props.isRow ? 'row' : 'column')};
    align-items: flex-start;
    justify-content: ${props =>
        props.justifyContent ? props.justifyContent : 'column'};
    width: 100%;
    margin-bottom: ${variables.spacers.s};

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
    justify-content: start;
    width: 100%;
    padding: 6px;
    font-weight: 600;
    font-size: 18px;
    text-align: start;
    background-color: #ce93d8;
    border-radius: ${variables.spacers.s};
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const SectionText = styled.div`
    margin-left: ${variables.spacers.s};
    font-weight: 600;
    font-size: 18px;

    img {
        margin-right: ${variables.spacers.s};
    }
`;
