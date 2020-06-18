/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import variables from '../../../styles/variables';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: ${variables.spacers.xs} 0;
`;

export const WrapperCheckbox = styled.div`
    padding: 0 ${variables.spacers.s} ${variables.spacers.s}
        ${variables.spacers.s};
    color: ${(props) => props.theme.color};
`;
