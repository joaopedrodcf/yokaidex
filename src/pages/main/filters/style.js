/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import variables from '../../../styles/variables';

export const FiltersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 ${variables.spacers.s} ${variables.spacers.s}
        ${variables.spacers.s};
    color: ${props => props.theme.color};

    @media (min-width: ${variables.breakpoints.sm}) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;

        > div {
            width: 50%;
            padding: ${variables.spacers.s};
        }
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

    ${FiltersWrapper} {
        display: ${props => props.isCollapsed && 'none'};
    }

    ${InputContainer} {
        display: ${props => props.isCollapsed && 'none'};
    }

    button {
        margin-bottom: ${variables.spacers.s};
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

export const SpecialHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: ${variables.spacers.s};
    padding-top: ${variables.spacers.s};
    border-bottom: ${variables.spacers.xxxs} solid #fdd835;

    h2 {
        font-weight: 700;
        font-size: 18px;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.alignItems};
    justify-content: ${props => props.justifyContent};
`;
