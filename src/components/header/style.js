/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Styles from '../../styles/variables';

export const Wrapper = styled.div`
    position: fixed;
    z-index: 2;
    display: flex;
    align-items: center;
    width: 100%;
    height: ${Styles.generic.headerHeight};
    color: ${Styles.colors.black};
    background-color: ${Styles.colors.primary};
    box-shadow: ${Styles.shadows.m};

    div {
        display: flex;
        padding: ${Styles.spacers.xs};
    }

    * {
        ${Styles.typographys.lTitle};
        font-weight: bold;
    }
`;
