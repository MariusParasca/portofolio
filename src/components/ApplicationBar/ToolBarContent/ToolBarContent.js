import React from 'react';
import { makeStyles, Link, Typography, Hidden, IconButton } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import GitHubIcon from 'components/GitHubIcon/GitHubIcon';
import classes from './ToolBarContent.module.css';

const useStyles = makeStyles(theme => ({
  typographyRoot: {
    color: '#000000',
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      marginTop: '10px',
      marginBottom: '15px',
      borderBottom: '1px solid #2196f3',
    },
  },
  linkedInIconRoot: {
    color: '#2196f3',
    margin: '0 5px',
  },

  linkRoot: {
    '&:hover': {
      textDecoration: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '15px',
    },
  },
}));

const ToolBarContent = props => {
  const styles = useStyles();

  return (
    <div className={classes.toolbarContent}>
      <Hidden smUp implementation="css">
        <IconButton aria-label="refresh" color="primary" onClick={props.onClickBackButton}>
          <ArrowBackIosIcon />
        </IconButton>
      </Hidden>
      <Typography
        variant="h6"
        classes={{
          root: styles.typographyRoot,
        }}
      >
        Marius Parasca Portofolio
      </Typography>
      <div className={classes.gitHubIconContainer}>
        <GitHubIcon link="https://github.com/MariusParasca" text="GitHub" />
      </div>
      <Link classes={{ root: styles.linkRoot }} href="https://www.linkedin.com/in/marius-parasca-33785515b/">
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
  );
};

export default ToolBarContent;
