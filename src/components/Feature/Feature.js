import React from 'react';

import classes from './Feature.module.css';
import { Typography } from '@material-ui/core';

const Feature = props => {
  return (
    <div className={classes.container}>
      <Typography variant="h6">{props.text}</Typography>
    </div>
  );
};

export default Feature;
