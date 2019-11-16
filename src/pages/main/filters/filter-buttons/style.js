/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import variables from '../../../../styles/variables';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    > button:nth-child(1) {
        margin-right: ${variables.spacers.s};
    }
`;
