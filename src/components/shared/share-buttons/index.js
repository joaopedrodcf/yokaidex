import React from 'react';
import {
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
    FacebookShareButton,
    FacebookIcon,
} from 'react-share';
import { useLocation } from '@reach/router';
import { Wrapper } from './style';

const ShareButtons = () => {
    const location = useLocation();

    return (
        <Wrapper>
            <TwitterShareButton url={location.href}>
                <TwitterIcon size={32} round />
            </TwitterShareButton>
            <WhatsappShareButton url={location.href}>
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <FacebookShareButton url={location.href}>
                <FacebookIcon size={32} round />
            </FacebookShareButton>
        </Wrapper>
    );
};

export default ShareButtons;
