import styled from 'styled-components';
import variables from '../../styles/variables';

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Label = styled.label`
    margin-bottom: ${variables.spacers.xs};
    color: ${props => props.theme.color};
    ${variables.typographys.lTitle};
    font-weight: bold;
`;

export const SCTextarea = styled.textarea`
    width: 100%;
    padding: ${variables.spacers.s};
    color: ${variables.colors.black};
    border: ${variables.spacers.xxxs} solid ${variables.colors.black};
    border-radius: ${variables.spacers.xxs};
    outline: none;
    ${variables.typographys.mBold};

    :focus {
        border: ${variables.spacers.xxxs} solid #fdd835;
    }
`;

export const ButtonArea = styled.div`
    display: flex;
    justify-content: center;
    margin: ${variables.spacers.m} 0;
`;
