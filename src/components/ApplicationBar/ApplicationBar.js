import React, { useState, useCallback } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, Hidden, Drawer, IconButton, AppBar, Toolbar } from '@material-ui/core';

import ToolBarContent from './ToolBarContent/ToolBarContent';
import classes from './ApplicationBar.module.css';

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

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleIsDrawerOpen = useCallback(() => {
    setIsDrawerOpen(!isDrawerOpen);
  }, [isDrawerOpen]);

  return (
    <React.Fragment>
      <AppBar
        position="static"
        classes={{
          root: styles.appBarRoot,
        }}
      >
        <Toolbar>
          <Hidden smUp implementation="css">
            <IconButton
              color="inherit"
              classes={{ root: styles.menuIconRoot }}
              aria-label="open drawer"
              onClick={toggleIsDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden xsDown implementation="css" className={classes.hiddenToolBarWrapper}>
            <ToolBarContent />
          </Hidden>
        </Toolbar>
      </AppBar>
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          open={isDrawerOpen}
          onClose={toggleIsDrawerOpen}
          classes={{ paper: styles.drawerPaper }}
        >
          <ToolBarContent onClickBackButton={toggleIsDrawerOpen} />
        </Drawer>
      </Hidden>
    </React.Fragment>
  );
};

export default ApplicationBar;
