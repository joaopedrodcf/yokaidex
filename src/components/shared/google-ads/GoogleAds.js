import React, { Component } from 'react';
import { Container } from './style';

export default class GoogleAds extends Component {
    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
            <Container>
                <ins
                    className="adsbygoogle"
                    style={{ display: 'block' }}
                    data-ad-client="ca-pub-1259678268318620"
                    data-ad-slot="1259678268318620"
                    data-ad-format="auto"
                />
            </Container>
        );
    }
}
