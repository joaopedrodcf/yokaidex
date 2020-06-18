import styled from 'styled-components';
import variables from '../../../styles/variables';

export const Wrapper = styled.div`
    position: relative;
    width: ${(props) => props.isFullWidth && '100%'};
    margin-bottom: ${variables.spacers.s};

    svg {
        position: absolute;
        top: ${variables.spacers.s};
        left: ${variables.spacers.xs};
        color: ${variables.colors.black};
    }
`;

export const SCInput = styled.input`
    width: 100%;
    padding: ${(props) =>
        props.customPadding ? props.customPadding : '12px 32px'};
    color: ${variables.colors.black};
    border: ${variables.spacers.xxxs} solid ${variables.colors.black};
    border-radius: ${variables.spacers.xxs};
    outline: none;
    ${variables.typographys.mBold};

    :focus {
        border: ${variables.spacers.xxxs} solid #fdd835;
    }
`;
