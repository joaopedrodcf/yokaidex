import React, { Component } from 'react';
import { Container } from './style';

export default class GoogleAds extends Component {
    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: 'ca-pub-1259678268318620',
            enable_page_level_ads: true
        });
    }

    render() {
        return (
            <Container>
                <ins
                    className="adsbygoogle"
                    style={{ display: 'block' }}
                    data-ad-client="ca-pub-1259678268318620"
                    data-ad-slot="24524524"
                    data-ad-format="auto"
                    data-enable_page_level_ads
                />
            </Container>
        );
    }
}
