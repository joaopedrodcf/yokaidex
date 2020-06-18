import React from 'react';
import { Wrapper, HiddenCheckbox, SCCheckbox, Icon } from './style';

const Checkbox = ({ checked, name, checkboxtype, onChange, label }) => (
    <Wrapper checkboxtype={checkboxtype}>
        <HiddenCheckbox
            checked={checked}
            checkboxtype={checkboxtype}
            checkbox-type={checkboxtype}
            onChange={onChange}
            name={name}
        />
        <SCCheckbox checked={checked} checkboxtype={checkboxtype}>
            <Icon viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
            </Icon>
        </SCCheckbox>
        <span>{label}</span>
    </Wrapper>
);

export default React.memo(Checkbox);
