import React from 'react';
import { makeStyles, AppBar, Toolbar } from '@material-ui/core';

import ToolBarContent from './ToolBarContent/ToolBarContent';

const useStyles = makeStyles(theme => ({
  appBarRoot: {
    boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.75)',
    background: '#ffffff',
  },
  menuIconRoot: {
    color: '#2196f3',
  },
  drawerPaper: {
    padding: '8px 20px',
  },
}));

const ApplicationBar = () => {
  const styles = useStyles();

  return (
    <React.Fragment>
      <AppBar
        position="static"
        classes={{
          root: styles.appBarRoot,
        }}
      >
        <Toolbar>
          <ToolBarContent />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default ApplicationBar;
