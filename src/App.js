import React from 'react';
import { ThemeProvider } from '@material-ui/core';

import ApplicationBar from 'components/ApplicationBar/ApplicationBar';
import Main from 'components/Main/Main';
import Projects from 'components/Projects/Projects';

import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <ApplicationBar />
        <Main />
        <Projects />
      </div>
    </ThemeProvider>
  );
}

export default App;
