import React from 'react';
import Switch from 'react-switch';

export default function ToggleSwitch(props) {
    const { onChange, checked } = props;
    return (
        <Switch
            onChange={onChange}
            checked={checked}
            checkedIcon={false}
            uncheckedIcon={false}
        />
    );
}
