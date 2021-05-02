import React from 'react';
import { makeStyles, Link, Typography, Hidden } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import GitHubIcon from 'components/shared/GitHubIcon/GitHubIcon';
import classes from './ToolBarContent.module.css';
import NextLink from 'components/shared/NextLink/NextLink';
import { ABOUT_ME_ROUTE, PROJECTS_ROUTE, TESTIMONIALS_ROUTE } from 'shared/routes';

const useStyles = makeStyles((theme) => ({
  typographyRoot: {
    fontSize: '2rem',
    fontWeight: 500,
    marginBottom: -30,
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
  },
  linkRoot: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

const ToolBarContent = (props) => {
  const styles = useStyles();

  return (
    <div className={classes.toolbarContent}>
      <Hidden smDown implementation="css">
        <NextLink route="/">
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
      <div className={classes.rightContainer}>
        <NextLink route={PROJECTS_ROUTE}>
          <Typography variant="h3" className={styles.menuItem}>
            Projects
          </Typography>
        </NextLink>
        <NextLink route={TESTIMONIALS_ROUTE}>
          <Typography variant="h3" className={styles.menuItem}>
            Testimonials
          </Typography>
        </NextLink>
        <NextLink route={ABOUT_ME_ROUTE}>
          <Typography variant="h3" className={styles.menuItem}>
            About me
          </Typography>
        </NextLink>
      </div>
    </div>
  );
};

export default ToolBarContent;
