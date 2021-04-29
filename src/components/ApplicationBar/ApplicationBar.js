import React from 'react';
import { makeStyles, AppBar, Toolbar } from '@material-ui/core';

import ToolBarContent from './ToolBarContent/ToolBarContent';
import classes from './ApplicationBar.module.css';
import Wrapper from 'components/shared/Wrapper/Wrapper';

const useStyles = makeStyles((theme) => ({
  appBarRoot: {
    boxShadow: 'none',
    background: 'none',
    overflow: 'hidden',
  },
  menuIconRoot: {
    color: '#2196f3',
  },
  drawerPaper: {
    padding: '8px 20px',
  },
  toolbar: {
    background: '#007ACC',
    padding: 0,
    minHeight: 50,
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
        <Toolbar className={styles.toolbar}>
          <Wrapper>
            <ToolBarContent />
          </Wrapper>
        </Toolbar>
        <div className={classes.emptyContainer} />
      </AppBar>
    </React.Fragment>
  );
};

export default ApplicationBar;
