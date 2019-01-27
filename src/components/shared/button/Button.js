import React from 'react';
import SCButton from './style';

const Button = ({ label, type, children, onClick }) => (
    <SCButton type={type} onClick={onClick}>
        {label} {children}
    </SCButton>
);

export default Button;
