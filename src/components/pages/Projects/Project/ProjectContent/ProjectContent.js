import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

import Feature from '../Feature/Feature';
import classes from './ProjectContent.module.css';

const useStyles = makeStyles((theme) => ({
  description: {
    color: 'rgb(164,171,178)',
    fontSize: '17px',
    fontFamily: 'Hind',
    lineHeight: 1.9,
    maxWidth: '85%',
  },
}));

const ProjectContent = (props) => {
  const { features } = props;

  const styles = useStyles();

  return (
    <React.Fragment>
      <Typography variant="body1" className={styles.description}>
        {props.description}
      </Typography>
      <div className={classes.featuresContainer}>
        {features && features.map((feature) => <Feature key={feature} text={feature} />)}
      </div>
    </React.Fragment>
  );
};

export default ProjectContent;
