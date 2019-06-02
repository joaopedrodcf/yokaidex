import React from 'react';
import Switch from 'react-switch';
import styles from '../../../styles';

export default function ToggleSwitch(props) {
    const { onChange, checked } = props;
    return (
        <Switch
            onColor={styles.color.primary}
            onChange={onChange}
            checked={checked}
            checkedIcon={false}
            uncheckedIcon={false}
        />
    );
}
