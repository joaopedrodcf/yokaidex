/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import GoogleAnalytics from 'react-ga';

GoogleAnalytics.initialize('UA-134596491-1');

const withTracker = (WrappedComponent, options = { anonymizeIp: true }) => {
    const trackPage = (page) => {
        GoogleAnalytics.set({
            page,
            ...options,
        });
        GoogleAnalytics.pageview(page);
    };

    const HOC = (props) => {
        useEffect(() => {
            trackPage(props.location.pathname);
        }, [props.location.pathname]);

        return <WrappedComponent {...props} />;
    };

    return HOC;
};

export default withTracker;
