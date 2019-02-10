import React from 'react';
import { SCInput, Container } from './style';

const Input = ({ id, name, value, onChange, placeholder, children }) => (
    <Container>
        <SCInput
            type="text"
            placeholder={placeholder}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
        />
        {children}
    </Container>
);

export default Input;
