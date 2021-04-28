import React from 'react';
import { Typography } from '@material-ui/core';

import Feature from '../Feature/Feature';
import classes from './ProjectContent.module.css';

const ProjectContent = (props) => {
  const { features } = props;
  return (
    <React.Fragment>
      <Typography variant="body1">{props.description}</Typography>
      <div className={classes.featuresContainer}>
        {features && features.map((feature) => <Feature key={feature} text={feature} />)}
      </div>
    </React.Fragment>
  );
};

export default ProjectContent;
