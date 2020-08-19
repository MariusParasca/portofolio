import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

import Project from './Project/Project';
import classes from './Projects.module.css';

const useStyles = makeStyles((theme) => ({
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
        siteLink="http://shipstock.com"
        key="shipstock"
        image="shipstock"
        projectTitle="ShipStock Landing Page"
        description="The landing page for ShipStock application"
        features={['JavaScript', 'Webpack', 'HTML', 'CSS', 'Sass']}
      />
      <Project
        siteLink="http://shipstock.com/world"
        key="shipstockapp"
        image="shipstockapp"
        projectTitle="ShipStock App"
        description="ShipStock Application is a social network that connects all together the maritime community"
        features={[
          'JavaScript',
          'React',
          'React Infinity Scroll',
          'React Linkify',
          'Material UI',
          'React Mentions',
          'React Router Dom',
          'Axios',
          'Date Fns',
          'Auth0',
          'Redux',
        ]}
      />
      <Project
        siteLink="http://colorchance.com"
        key="colorchance"
        image="colorchance"
        projectTitle="Color Chance"
        description="Color Chance is an application that generates random colors based on some settings that you set. This app is great for trying to find new colors for designing a website, banner, etc. The colors that are generated could be saved and downloaded in different formats: txt, image and pdf"
        features={['JavaScript', 'React', 'Material UI', 'Html2canvas', 'JSPdf', 'Redux', 'Chroma JS', 'Framer Motion']}
      />
      <Project
        siteLink="http://editcode.xyz"
        key="editcode"
        image="editcode"
        projectTitle="Javascript Code Editor"
        description="Javascript Code is an easy way to edit and run javascript code. The application is design for code beginners that started to learn javascript and want an easy setup to learn about it"
        features={['JavaScript', 'React', 'Material UI', 'Code Mirror', 'Html2canvas', 'Eslint browser', 'Prettier']}
      />
      <Project
        siteLink="http://extractcolor.com"
        key="extractcolor"
        image="extractcolor"
        projectTitle="Extract Color"
        description="Extract Color is an application that extracts the main colors from an image. You are able to upload an image, search images by typing some words and take the main colors from an website that you like by typing the link of it. The colors that are generated could be saved and downloaded in different formats: txt, image and pdf"
        features={[
          'JavaScript',
          'React',
          'Material UI',
          'Html2canvas',
          'JSPdf',
          'Redux',
          'Chroma JS',
          'Framer Motion',
          'Node-vibrant',
          'React Drop zone',
        ]}
      />
      <Project
        siteLink=""
        key="trackmeteo"
        image="trackmeteo"
        projectTitle="Track Meteo"
        description="Track meteo is an app that allows a couple of nice features: search for any location, automatic saving of searches, nice charts, day selection, see weather on the global map with different type of maps (temperature, precipitation, etc.). Custom selection of main weather metric, manage favorites weather cities (add, delete), and much "
        features={['JavaScript', 'React', 'Material UI', 'Code Mirror', 'Html2canvas', 'Eslint browser', 'Prettier']}
      />
      <Project
        siteLink="http://eznote.xyz"
        key="eznote"
        image="eznote"
        projectTitle="Note Taker"
        description="Note Taker is an easy way to take easy notes"
        features={[
          'JavaScript',
          'React',
          'Material UI',
          'React Split Pane',
          'React Simple Keyboard',
          'React Draggable',
        ]}
      />
      <Project
        siteLink="http://rss-aggregator.parascamarius.me/"
        key="rssAggregator"
        image="rssAggregator"
        projectTitle="Rss Aggregator"
        firstGitHubText="Frontend"
        firstGitHubLink="https://github.com/MariusParasca/rss-reader-frontend"
        secondGitHubText="Backend"
        secondGitHubLink="https://github.com/MariusParasca/rss-reader-backend"
        description="RSS Aggregator is an application that can manage (add/delete RSS feed and see new items) any RSS feeds. The application
        also has a service that checks for any new items on the added RSS feeds. If there are any new ones, it will store them in the database.
        This service is not deployed because it will fill the database pretty quickly (the host is a free one)"
        features={[
          'JavaScript',
          'React',
          'Express',
          'NodeJs',
          'Sequelize',
          'SQL',
          'Pagination',
          'Auto Fetch rss feed items Service',
          'Docker',
          'Material UI',
        ]}
      />
      <Project
        key="keeTracker"
        image="keepTracker"
        projectTitle="Keep Tracker (not deployed yet)"
        firstGitHubText="Frontend"
        firstGitHubLink="https://github.com/MariusParasca/KeepTracker-frontend"
        secondGitHubText="Backend"
        secondGitHubLink="https://github.com/MariusParasca/KeepTracker-backend"
        description="Keep Tracker is a personal project that is still work in progress. For now, I implemented the login and register. I used token-based authentication. It also has a refresh token for auto-refresh of the access token."
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
          'Material UI',
          'MongoDB',
        ]}
      />
      <Project
        key="lemnplai"
        siteLink="http://lemnplai.parascamarius.me/"
        image="lemnplai"
        projectTitle="Lemnplai"
        firstGitHubText="Frontend"
        firstGitHubLink="https://github.com/MariusParasca/lemnplai"
        description="Lemnplai it is a landing page that presents the products of a wood processing company."
        features={['React', 'Bootstrap', 'Landing page']}
      />
    </div>
  );
};

export default Projects;
