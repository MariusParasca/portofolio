import React from 'react';
import GitHub from '@material-ui/icons/GitHub';
import { makeStyles, Link } from '@material-ui/core';

import classes from './GitHubIcon.module.css';

const GitHubIcon = props => {
  const styles = makeStyles(theme => ({
    githubIconRoot: {
      color: props.color || '#000000',
      margin: '0 5px',
      [theme.breakpoints.down('sm')]: {
        color: '#000000',
      },
    },
    linkRoot: {
      '&': {
        color: '#000000',
        [theme.breakpoints.down('sm')]: {
          color: '#000000',
        },
      },
      '&:hover': {
        textDecoration: 'none',
      },
    },
    gitHubIconText: {
      color: props.color || '#000000',
      [theme.breakpoints.down('sm')]: {
        color: '#000000',
      },
    },
  }))();

  return (
    <Link classes={{ root: styles.linkRoot }} href={props.link}>
      <div className={classes.iconContainer}>
        <GitHub
          classes={{
            root: styles.githubIconRoot,
          }}
        />
        <span className={styles.gitHubIconText}>{props.text}</span>
      </div>
    </Link>
  );
};

export default GitHubIcon;
