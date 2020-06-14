/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import variables from '../../styles/variables';

export const Wrapper = styled.div`
    width: 100%;
    padding: ${variables.spacers.xxs} ${variables.spacers.s};
    background-color: ${variables.colors.grey};
    border-radius: ${variables.spacers.m};
    box-shadow: ${variables.shadows.s};
`;

export const FlexWrapProducts = styled.div`
    display: flex;
`;

export const Link = styled.a`
    padding: ${variables.spacers.s};
    color: inherit;
    text-decoration: inherit;
`;

export const Name = styled.div`
    ${variables.typographys.lBold};
`;

export const Price = styled.div`
    ${variables.typographys.l};
`;
