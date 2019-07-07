import React from 'react';
import Switch from 'react-switch';
import styles from '../../../styles';

export default function ToggleSwitch({ onChange, checked }) {
    return (
        <Switch
            onColor={styles.color.primary}
            onChange={onChange}
            checked={checked}
            checkedIcon={false}
            uncheckedIcon={false}
            aria-checked={checked}
            aria-label="Toogle the background color"
        />
    );
}
