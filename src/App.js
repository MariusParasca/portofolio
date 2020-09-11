import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import ReactGA from 'react-ga';

import ApplicationBar from 'components/ApplicationBar/ApplicationBar';
import Main from 'components/Main/Main';
import Projects from 'components/Projects/Projects';
import Footer from 'components/Footer/Footer';

import theme from './theme';

function initializeReactGA() {
  ReactGA.initialize('UA-177805206--1');
  ReactGA.pageview('/');
}

initializeReactGA();

function App() {
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
