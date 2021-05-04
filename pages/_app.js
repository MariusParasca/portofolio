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
        <title>Expert in Web Development | Frontend focused | Marius Parasca</title>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#007ACD" />
        <meta
          name="description"
          content="Expert in Web Development. Freelancer with over 4+ years of experience. Very passionate about Web Development (frontend focused), Problem-solver Fast-learner, Proactive and Organized."
        />
        <meta
          property="og:description"
          content="Expert in Web Development. Freelancer with over 4+ years of experience. Very passionate about Web Development (frontend focused), Problem-solver Fast-learner, Proactive and Organized."
        />
        <meta property="og:image" content="https://mariusparasca.com/static/images/thumbnail.jpg" />
        <meta property="og:image:width" content="1902" />
        <meta property="og:image:height" content="876" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Expert in Web Development. Freelancer with over 4+ years of experience. Very passionate about Web Development (frontend focused), Problem-solver Fast-learner, Proactive and Organized."
        />
        <meta name="twitter:image" content="https://mariusparasca.com/static/images/thumbnail.jpg" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <ApplicationBar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
