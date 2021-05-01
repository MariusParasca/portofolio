import { Typography } from '@material-ui/core';
import React from 'react';

import Project from './Project/Project';
import { projectsData } from '../../../shared/data';

const Projects = () => {
  return (
    <div>
      <Typography variant="body2" align="center">
        *The projects showing here are only the ones that I didn't signed an NDA with. The other ones where I signed an
        NDA can't be shown here
      </Typography>
      {projectsData.map((project) => (
        <Project
          // siteLink="http://shipstock.com"
          key={project.projectTitle}
          projectTitle={project.projectTitle}
          image={project.image}
          description={project.description}
          features={project.features}
        />
      ))}
    </div>
  );
};

export default Projects;
