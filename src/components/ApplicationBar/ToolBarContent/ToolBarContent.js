import React from 'react';
import { makeStyles, Link, Typography, Hidden } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import GitHubIcon from 'components/shared/GitHubIcon/GitHubIcon';
import classes from './ToolBarContent.module.css';

const useStyles = makeStyles((theme) => ({
  typographyRoot: {
    color: '#000000',
    flexGrow: 1,
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
        <Typography
          variant="h6"
          classes={{
            root: styles.typographyRoot,
          }}
        >
          Marius Parasca | Portfolio
        </Typography>
      </Hidden>
      <div className={classes.iconsContainer}>
        <div className={classes.gitHubIconContainer}>
          <GitHubIcon link="https://github.com/MariusParasca" text="GitHub" />
        </div>
        <Link
          classes={{ root: styles.linkRoot }}
          href="https://www.linkedin.com/in/marius-parasca-33785515b/"
          target="_blank"
        >
          <div className={classes.iconContainer}>
            <LinkedInIcon
              classes={{
                root: styles.linkedInIconRoot,
              }}
            />
            <span className={classes.linkedInIconText}>Linked In</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ToolBarContent;
