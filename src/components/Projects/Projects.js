import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

import Project from './Project/Project';
import classes from './Projects.module.css';

const useStyles = makeStyles(theme => ({
  typographyRoot: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '3rem',
    },
  },
}));

const Projects = () => {
  const styles = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h2" align="center" classes={{ root: styles.typographyRoot }}>
        Projects
      </Typography>
      <Project
        image="/static/images/keepTracker.jpg"
        projectTitle="Keep Tracker"
        firstGitHubText="Frontend"
        firstGitHubLink="https://github.com/MariusParasca/KeepTracker-frontend"
        secondGitHubText="Backend"
        secondGitHubLink="https://github.com/MariusParasca/KeepTracker-backend"
        description="Keep Tracker is a platform where you can do a lot of stuff"
        features={[
          'React',
          'Express',
          'TypeScript',
          'JWT',
          'Access/Refresh Token',
          'GraphQL',
          'Authentication Server',
          'Auto refresh for access token',
          'Protected routes',
        ]}
      />
      <Project
        image="/static/images/lemnplai.jpg"
        projectTitle="Lemnplai"
        firstGitHubText="Frontend"
        firstGitHubLink="https://github.com/MariusParasca/lemnplai"
        description="Lemplai it is a landing page that presents the products of a wood processing company"
        features={['React', 'Bootstrap', 'Landing page']}
      />
    </div>
  );
};

export default Projects;
