import React from 'react';
import {
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
    FacebookShareButton,
    FacebookIcon,
} from 'react-share';
import { Wrapper } from './style';

const index = () => {
    return (
        <Wrapper>
            <TwitterShareButton url={window.location.href}>
                <TwitterIcon size={32} round />
            </TwitterShareButton>
            <WhatsappShareButton url={window.location.href}>
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <FacebookShareButton url={window.location.href}>
                <FacebookIcon size={32} round />
            </FacebookShareButton>
        </Wrapper>
    );
};

export default index;
