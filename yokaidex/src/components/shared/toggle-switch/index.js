import React from 'react';
import Switch from 'react-switch';
import variables from '../../../styles/variables';

const ToggleSwitch = ({ onChange, checked }) => {
    return (
        <Switch
            onColor={variables.colors.primary}
            onChange={onChange}
            checked={checked}
            checkedIcon={false}
            uncheckedIcon={false}
            aria-checked={checked}
            aria-label="Toogle the background color"
        />
    );
};

export default React.memo(ToggleSwitch);
