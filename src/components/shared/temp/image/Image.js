import React from 'react';
import SCImage from './style';

const Image = ({ imageUrl, altText, size, isThumbnail }) => (
    <SCImage
        src={imageUrl}
        alt={altText}
        size={size}
        isThumbnail={isThumbnail}
    />
);

export default Image;
