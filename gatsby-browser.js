/* eslint-disable import/prefer-default-export */
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react';
import { LocationProvider } from '@reach/router';
import { ContextProvider } from './src/store';
import Layout from './src/components/layout';

export const wrapRootElement = ({ element }) => (
    <LocationProvider>
        <ContextProvider>
            <Layout>{element}</Layout>
        </ContextProvider>
    </LocationProvider>
);
