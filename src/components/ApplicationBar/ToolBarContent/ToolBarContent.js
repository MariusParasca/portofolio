import React, { useState } from 'react';
import { makeStyles, Link, Typography, Hidden, IconButton, Drawer, Divider, useMediaQuery } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';

import GitHubIcon from 'components/shared/GitHubIcon/GitHubIcon';
import classes from './ToolBarContent.module.css';
import NextLink from 'components/shared/NextLink/NextLink';
import { ABOUT_ME_ROUTE, HOME_ROUTE, PROJECTS_ROUTE, TESTIMONIALS_ROUTE } from 'shared/routes';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  typographyRoot: {
    fontSize: '2rem',
    fontWeight: 500,
    marginBottom: -30,
  },
  typographyDrawer: {
    fontSize: '1.8rem',
    fontWeight: 500,
    marginTop: 40,
    color: '#0163A3',
  },
  linkedInIconRoot: {
    color: '#2196f3',
    margin: '0 5px',
  },
  menuItem: {
    fontSize: '1rem',
    marginRight: 25,
    fontWeight: 500,
    '&:hover': {
      color: '#e6e6e6',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.1rem',
      marginRight: 0,
      marginBottom: 10,
      color: '#007ACC',
      '&:hover': {
        color: '#0163A3',
      },
    },
  },
  linkRoot: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
  iconButton: {
    color: '#fff',
  },
  closeIcon: {
    color: '#0163A3',
    position: 'absolute',
    top: '5px',
    right: '5px',
    padding: 3,
    zIndex: 30,
  },
  activeLinkSmDown: {
    '& h3': {
      color: '#014f82',
    },
  },
  drawerPaper: {
    overflow: 'hidden',
  },
  drawerMenuIcon: {
    marginBottom: -10,
  },
}));

const ToolBarContent = (props) => {
  const styles = useStyles();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const matchSmDown = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const getLinks = () => (
    <>
      <NextLink
        route={PROJECTS_ROUTE}
        onClick={matchSmDown ? toggleDrawer : undefined}
        activeClassName={matchSmDown ? styles.activeLinkSmDown : ''}
      >
        <Typography variant="h3" className={styles.menuItem}>
          Projects
        </Typography>
      </NextLink>
      <NextLink
        route={TESTIMONIALS_ROUTE}
        onClick={matchSmDown ? toggleDrawer : undefined}
        activeClassName={matchSmDown ? styles.activeLinkSmDown : ''}
      >
        <Typography variant="h3" className={styles.menuItem}>
          Testimonials
        </Typography>
      </NextLink>
      <NextLink
        route={ABOUT_ME_ROUTE}
        onClick={matchSmDown ? toggleDrawer : undefined}
        activeClassName={matchSmDown ? styles.activeLinkSmDown : ''}
      >
        <Typography variant="h3" className={styles.menuItem}>
          About me
        </Typography>
      </NextLink>
    </>
  );

  return (
    <>
      <div className={classes.toolbarContent}>
        <Hidden mdUp>
          <IconButton className={clsx(styles.iconButton, styles.drawerMenuIcon)} onClick={toggleDrawer}>
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
        </Hidden>
        <Hidden smDown implementation="css">
          <NextLink route={HOME_ROUTE} activeClassName="none">
            <Typography
              variant="h3"
              classes={{
                root: styles.typographyRoot,
              }}
            >
              Marius Parasca
            </Typography>
          </NextLink>
        </Hidden>
        <Hidden smDown implementation="css">
          <div className={classes.rightContainer}>{getLinks()}</div>
        </Hidden>
      </div>
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer} classes={{ paper: styles.drawerPaper }}>
        <div className={classes.drawerContainer}>
          <IconButton className={styles.closeIcon} onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>
          <div className={classes.drawerContent}>
            <NextLink route={HOME_ROUTE} activeClassName="none" onClick={matchSmDown ? toggleDrawer : undefined}>
              <Typography
                variant="h3"
                classes={{
                  root: styles.typographyDrawer,
                }}
                align="center"
              >
                Marius Parasca
              </Typography>
            </NextLink>
            <Divider variant="middle" />
            <div className={classes.drawerLinksContainer}>{getLinks()}</div>
          </div>
          <div className={classes.drawerBlueContainer} />
        </div>
      </Drawer>
    </>
  );
};

export default ToolBarContent;
