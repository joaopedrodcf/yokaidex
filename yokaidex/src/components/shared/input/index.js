/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { SCInput, Wrapper } from './style';

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
    <Wrapper isFullWidth={isFullWidth}>
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
    </Wrapper>
);

export default React.memo(Input);
