import styled from 'styled-components';
import variables from '../../../styles/variables';

export const ProgressBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: ${(props) => props.theme.color};
    ${variables.typographys.mTitle};
    font-weight: 600;

    div:nth-child(1) {
        width: 12.5%;
        margin-right: ${variables.spacers.xs};
    }

    div:nth-child(2) {
        width: 12.5%;
        margin-right: ${variables.spacers.xs};
    }
`;

export const Bar = styled.div`
    width: 75%;
    background-color: ${variables.colors.greyLight};
    border-radius: ${variables.spacers.s};

    div {
        height: 10px;
        border-radius: ${variables.spacers.s};
    }
`;
