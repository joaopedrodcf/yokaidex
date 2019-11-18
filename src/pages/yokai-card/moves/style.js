import styled, { css } from 'styled-components';
import variables from '../../../styles/variables';

export const Move = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    margin-bottom: ${variables.spacers.xs};
    padding: ${variables.spacers.s};
    background-color: ${props => props.color};
    border-radius: ${variables.spacers.s};

    > div:nth-child(1) {
        width: 75%;
        text-align: start;
    }

    > div:nth-child(2) {
        width: 25%;
        text-align: end;
    }
`;

export const MoveTitle = styled.div`
    margin-bottom: ${variables.spacers.s};
    color: ${props => props.color};
    ${variables.typographys.lBold};
`;

export const MoveText = styled.div`
    ${({ bold }) =>
        bold &&
        css`
            ${variables.typographys.mBold}
        `}

    img {
        position: absolute;
        top: ${variables.spacers.xs};
        right: ${variables.spacers.xs};
    }
`;
