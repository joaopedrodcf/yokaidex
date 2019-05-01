import React, { Component } from 'react';
import { Container } from './style';

// If in future its possible to use google ads add the follwing line to index.html at end of body
// <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
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
