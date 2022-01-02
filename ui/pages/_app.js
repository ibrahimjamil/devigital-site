import * as React from 'react';
import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { createUploadLink } from 'apollo-upload-client';
import { ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client';
import theme from '../src/theme';
import { BASE_URL } from '../routes';
import Layout from '../src/components/Layout/Layout';
import createEmotionCache from '../src/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
const uploadLink = createUploadLink({ uri: `${BASE_URL}/admin/api` });
export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([uploadLink]),
});

export default function MyApp(props) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>Devigital Systems</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <link rel="icon" href="/images/Devigital.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap" rel="stylesheet"></link>
            </Head>
            <ThemeProvider theme={theme}>
                <Layout>
                    <CssBaseline />
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </CacheProvider>
    );
}
