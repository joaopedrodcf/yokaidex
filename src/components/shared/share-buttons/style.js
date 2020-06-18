/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import variables from '../../../styles/variables';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: ${variables.spacers.s};

    > button {
        margin: 0 ${variables.spacers.s};
    }
`;
