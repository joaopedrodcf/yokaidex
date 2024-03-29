import styled from 'styled-components';
import variables from '../../../styles/variables';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
        margin-left: ${variables.spacers.s};
    }
`;

export const Icon = styled.svg`
    fill: none;
    stroke: ${variables.colors.white};
    stroke-width: ${variables.spacers.xxs};
`;

// Be aware that the custom attributes only work like this
// For example 'data-ANYTHING' or 'aria-ANYTHING'
// Custom attributes like 'checkboxtype' that we had previously don't work
// Maybe in a feature styled-components version we can remove this
export const HiddenCheckbox = styled.input.attrs((props) => ({
    type: 'checkbox',
    'data-checkbox-type': props.checkboxtype,
}))`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    white-space: nowrap;
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
`;

export const SCCheckbox = styled.div`
    display: inline-block;
    width: 16px;
    height: 16px;
    background: ${(props) => (props.checked ? '#f06292' : '#f8bbd0')};
    border-radius: 3px;
    transition: all 150ms;

    ${HiddenCheckbox}:focus + & {
        box-shadow: 0 0 0 3px #f8bbd0;
    }

    ${Icon} {
        visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
    }
`;
