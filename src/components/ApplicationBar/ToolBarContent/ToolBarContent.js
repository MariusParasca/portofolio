import React from 'react';
import { makeStyles, Link, Typography, Hidden } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import GitHubIcon from 'components/shared/GitHubIcon/GitHubIcon';
import classes from './ToolBarContent.module.css';
import NextLink from 'components/shared/NextLink/NextLink';

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
    </div>
  );
};

export default ToolBarContent;
