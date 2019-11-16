import styled from 'styled-components';
import variables from '../../../styles/variables';

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: ${props => props.alignItems};
    justify-content: ${props => props.justifyContent};
`;

export const Section = styled.div`
    display: flex;
    flex-direction: ${props => (props.isRow ? 'row' : 'column')};
    align-items: flex-start;
    justify-content: ${props => props.justifyContent};
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
    justify-content: space-between;
    width: 100%;
    padding: ${variables.spacers.s};
    color: ${variables.colors.black};
    text-align: start;
    border-radius: ${variables.spacers.s};
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    ${variables.typographys.mBold};
`;

export const SectionImageTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;
