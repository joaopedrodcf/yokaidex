import LazyLoad from 'react-lazy-load';
import styled, { css } from 'styled-components';

const sizeTable = {
    small: '35px',
    medium: '62px',
    large: '150px',
    special: '25px',
};

export const SCImage = styled.img`
    ${({ size, isThumbnail }) => {
        return css`
            height: ${sizeTable[size]};
            background-color: ${isThumbnail && 'white'};
            border-radius: ${isThumbnail && '50%'};
        `;
    }}
`;

export const SCLazyLoad = styled(LazyLoad)`
    display: flex;
    align-items: center;
    ${({ size }) => {
        return css`
            height: ${sizeTable[size]};
        `;
    }}
`;
