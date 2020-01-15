import React from 'react';
import { Typography, Divider, Card } from '@material-ui/core';

import classes from './Projects.module.css';

const Projects = () => {
  return (
    <div className={classes.container}>
      <Typography variant="h2" align="center">
        Projects
      </Typography>
      <Card variant="outlined">Salut</Card>
    </div>
  );
};

export default Projects;
