import React from 'react';

import classes from './Feature.module.css';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  typographyRoot: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
    },
  },
}));

const Feature = (props) => {
  const styles = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h6" classes={{ root: styles.typographyRoot }}>
        {props.text}
      </Typography>
    </div>
  );
};

export default Feature;
