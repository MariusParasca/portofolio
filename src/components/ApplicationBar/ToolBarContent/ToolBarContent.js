import React from 'react';
import { makeStyles, Link, Typography, Hidden, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

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
  iconRoot: {
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
        Parasca Marius Portofolio
      </Typography>
      <Link classes={{ root: styles.linkRoot }} href="https://github.com/MariusParasca">
        <div className={classes.iconContainer}>
          <GitHubIcon
            classes={{
              root: styles.iconRoot,
            }}
          />
          <span>GitHub</span>
        </div>
      </Link>
      <Link classes={{ root: styles.linkRoot }} href="https://www.linkedin.com/in/marius-parasca-33785515b/">
        <div className={classes.iconContainer}>
          <LinkedInIcon
            classes={{
              root: styles.iconRoot,
            }}
          />
          <span>Linked In</span>
        </div>
      </Link>
    </div>
  );
};

export default ToolBarContent;
