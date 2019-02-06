import React from 'react';
import { SCImage, SCLazyLoad } from './style';

const Image = ({ imageUrl, altText, size, isThumbnail }) => (
    <SCLazyLoad size={size} offsetVertical={1000}>
        <SCImage
            src={imageUrl}
            alt={altText}
            size={size}
            isThumbnail={isThumbnail}
        />
    </SCLazyLoad>
);

export default Image;
