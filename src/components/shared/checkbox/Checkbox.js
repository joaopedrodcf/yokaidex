import React from 'react';
import {
    CheckboxContainer,
    HiddenCheckbox,
    StyledCheckbox,
    Icon
} from './style';

const Checkbox = ({ checked, name, checkboxtype, onChange, label }) => (
    <CheckboxContainer checkboxtype={checkboxtype}>
        <HiddenCheckbox
            checked={checked}
            checkboxtype={checkboxtype}
            checkbox-type={checkboxtype}
            onChange={onChange}
            name={name}
        />
        <StyledCheckbox checked={checked} checkboxtype={checkboxtype}>
            <Icon viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
            </Icon>
        </StyledCheckbox>
        <span>{label}</span>
    </CheckboxContainer>
);

export default React.memo(Checkbox);
