import React from 'react';
import SCImage from './style';

const Image = ({ imageUrl, altText, size }) => (
    <SCImage src={imageUrl} alt={altText} size={size} />
);

export default Image;
