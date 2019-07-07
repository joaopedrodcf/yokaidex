import React from 'react';
import { SCInput, Container } from './style';

const Input = ({
    id,
    name,
    value,
    onChange,
    placeholder,
    children,
    isFullWidth,
    ...rest
}) => (
    <Container isFullWidth={isFullWidth}>
        <SCInput
            type="text"
            placeholder={placeholder}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            {...rest}
        />
        {children}
    </Container>
);

export default React.memo(Input);
