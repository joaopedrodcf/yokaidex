import React from 'react';
import { SCImage, SCLazyLoad } from './style';

const Image = ({ imageUrl, altText, size, isThumbnail, isToLazyLoad }) => (
    <>
        {isToLazyLoad ? (
            <SCLazyLoad
                size={size}
                offset={500}
                throttle={250}
                debounce={false}
            >
                <SCImage
                    src={imageUrl}
                    alt={altText}
                    size={size}
                    isThumbnail={isThumbnail}
                />
            </SCLazyLoad>
        ) : (
            <SCImage
                src={imageUrl}
                alt={altText}
                size={size}
                isThumbnail={isThumbnail}
            />
        )}
    </>
);

export default React.memo(Image);
