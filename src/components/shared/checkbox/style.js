import styled from 'styled-components';

export const CheckboxContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
        margin-left: 12px;
    }
`;

export const Icon = styled.svg`
    fill: none;
    stroke: white;
    stroke-width: 2px;
`;

// Be aware that the custom attributes only work like this
// For example 'data-ANYTHING' or 'aria-ANYTHING'
// Custom attributes like 'checkboxtype' that we had previously don't work
// Maybe in a feature styled-components version we can remove this
export const HiddenCheckbox = styled.input.attrs(props => ({
    type: 'checkbox',
    'data-checkbox-type': props.checkboxtype
}))`
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

export const StyledCheckbox = styled.div`
    display: inline-block;
    width: 16px;
    height: 16px;
    background: ${props => (props.checked ? '#e57373' : '#e4b9b9')};
    border-radius: 3px;
    transition: all 150ms;

    ${HiddenCheckbox}:focus + & {
        box-shadow: 0 0 0 3px pink;
    }

    ${Icon} {
        visibility: ${props => (props.checked ? 'visible' : 'hidden')};
    }
`;
