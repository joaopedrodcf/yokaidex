/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { SCButton } from './style';

const Button = ({ label, type, children, onClick, ...rest }) => (
    <SCButton type={type} onClick={onClick} {...rest}>
        {label} {children}
    </SCButton>
);

export default React.memo(Button);
