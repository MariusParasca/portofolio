import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Fade from 'react-reveal/Fade';

import Project from './Project/Project';
import { projectsData } from '../../../shared/data';
import Wrapper from 'components/shared/Wrapper/Wrapper';
import TitleSection from 'components/shared/TitleSection/TitleSection';

const useStyles = makeStyles((theme) => ({
  wrapText: {
    marginTop: 40,
  },
  container: {
    marginBottom: 60,
  },
}));

const Projects = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Wrapper>
        <div className={styles.wrapText}>
          <TitleSection subTitle="PROJECTS" title="I've been working on" />
        </div>
        {projectsData.map((project) => (
          <Fade bottom>
            <Project
              siteLink={project.siteLink}
              key={project.projectTitle}
              projectTitle={project.projectTitle}
              image={project.image}
              description={project.description}
              features={project.features}
            />
          </Fade>
        ))}
      </Wrapper>
    </div>
  );
};

export default Projects;
