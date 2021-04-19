import '../styles/globals.css';

import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import ReactGA from 'react-ga';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import ApplicationBar from 'components/ApplicationBar/ApplicationBar';
import Footer from 'components/Footer/Footer';
import Main from 'components/Main/Main';

function initializeReactGA() {
  ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_CODE);
  ReactGA.pageview(window.location.pathname);
}

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  React.useEffect(() => {
    initializeReactGA();
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="This webpage represents Marius Parasca Porotofolio" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <ApplicationBar />
        <Main>
          <Component {...pageProps} />
        </Main>
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
