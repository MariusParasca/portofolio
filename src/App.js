import React, { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core';
import ReactGA from 'react-ga';

import ApplicationBar from 'components/ApplicationBar/ApplicationBar';
import Main from 'components/Main/Main';
import Projects from 'components/Projects/Projects';
import Footer from 'components/Footer/Footer';

import theme from './theme';

function initializeReactGA() {
  ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_CODE);
  ReactGA.pageview(window.location.pathname);
}

function App() {
  useEffect(() => {
    initializeReactGA();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <ApplicationBar />
        <Main />
        <Projects />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
