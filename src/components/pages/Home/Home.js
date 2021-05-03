import React, { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Lottie from 'react-lottie';
import Fade from 'react-reveal/Fade';

import classes from './Home.module.css';
import { Divider, Grid, makeStyles } from '@material-ui/core';
import Projects from 'components/pages/Projects/Projects';
import Testimonials from 'components/pages/Testimonials/Testimonials';
import * as programmingAnimationData from '../../../../public/static/animations/programming.json';
import Wrapper from 'components/shared/Wrapper/Wrapper';
import Card from './Card/Card';
import Project from './Project/Project';
import { projectsData, testimonialsData } from '../../../shared/data';
import NextLink from 'components/shared/NextLink/NextLink';
import FrontendSvg from '../../../svgs/frontend.svg';
import PassionSvg from '../../../svgs/passion.svg';
import TechnologiesSvg from '../../../svgs/technologies.svg';
import Testimonial from '../../shared/Testimonial/Testimonial';
import Carousel from '../../shared/Carousel/Carousel';
import { autoplayPlugin } from '@brainhubeu/react-carousel';

import clsx from 'clsx';
import TitleSection from 'components/shared/TitleSection/TitleSection';
import { TESTIMONIALS_ROUTE, PROJECTS_ROUTE } from 'shared/routes';
import LetsWorkTogether from 'components/shared/LetsWorkTogether/LetsWorkTogether';

const homeProjectsData = projectsData.slice(0, 3);
const homeTestimonialsData = testimonialsData.slice(0, 3);

const useStyles = makeStyles((theme) => ({
  typographyH1: {
    color: '#0062a3',
    textShadow: '0px 0px 1px rgba(150, 150, 150, 1)',
    fontSize: '3rem',
    fontWeight: 600,
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.1rem',
    },
  },
  typographyH2: {
    color: '#FE3D0C',
    textShadow: '0px 0px 1px rgba(150, 150, 150, 0.5)',
    fontSize: '2rem',
    fontWeight: 500,
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem',
    },
  },
  divider: {
    background: '#dbe6ee',
  },
  typographySubtitle1: {
    color: '#fff',
    fontSize: '2.5rem',
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: 85,
    [theme.breakpoints.down('xs')]: {
      fontSize: '2rem',
      marginBottom: 35,
      padding: '0 10px',
    },
  },
  card: {
    background: '#fff',
    padding: '20px',
    maxWidth: 380,
  },
  cardTitle: {
    fontWeight: 600,
    color: '#fff',
    fontSize: 24,
  },
  seeMoreTypo: {
    marginTop: 50,
    fontSize: 16,
    fontWeight: 600,
    color: '#A7AEB4',
  },
  secondDivider: {
    margin: '35px 0',
  },
  grid: {
    [theme.breakpoints.down('sm')]: {
      '& :nth-child(1)': {
        order: 1,
      },
      '& :nth-child(2)': {
        order: 3,
      },
      '& :nth-child(3)': {
        order: 2,
      },
    },
  },
  testimonial: {
    [theme.breakpoints.down('xs')]: {
      width: '320px',
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 10,
    },
  },
}));

const Main = (props) => {
  const { children } = props;

  const styles = useStyles();

  const matchXsDown = useMediaQuery((theme) => theme.breakpoints.down('xs'));

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: programmingAnimationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const SeeMoreHere = ({ to }) => (
    <div className={classes.seeMoreContainer}>
      <Fade>
        <NextLink route={to}>
          <Typography variant="h6" align="center" className={styles.seeMoreTypo}>
            See more here
          </Typography>
        </NextLink>
      </Fade>
    </div>
  );

  return (
    <div className={classes.overflowContainer}>
      <div className={classes.mainWrapper}>
        <div className={classes.infoContainer}>
          <Fade left>
            <div className={classes.textContainer}>
              <Typography variant="h1" className={styles.typographyH1} align="center">
                WEB DEVELOPMENT
              </Typography>
              <Divider className={styles.divider} />
              <Typography variant="h2" className={styles.typographyH2} align="center">
                Freelancing Services
              </Typography>
            </div>
          </Fade>
          <Lottie options={defaultOptions} height={400} width={400} style={{ margin: 0 }} />
        </div>
        <div className={classes.emptyDesignContainer} />
      </div>

      <div className={classes.colorContainer} />
      <div className={classes.blueContainer}>
        <Fade duration={2000}>
          <Typography variant="subtitle1" className={styles.typographySubtitle1}>
            Expert in Web Development
          </Typography>
        </Fade>
        <Wrapper>
          <Grid container justify="center" spacing={5}>
            <Grid item sm={6} md={4} xs={12}>
              <Fade duration={2000}>
                <Card
                  title="PASSION"
                  text={[
                    'Very passionate about Web Development, Problem-solving, Fast-learner, Proactive, and Organized',
                  ]}
                  svg={<PassionSvg width={55} height={60} />}
                />
              </Fade>
            </Grid>
            <Grid item sm={6} md={4} xs={12}>
              <Fade duration={2000} delay={matchXsDown ? 0 : 1000}>
                <Card
                  animationDelay={1000}
                  title="TECHNOLOGIES"
                  text={[
                    'Frontend: React/NextJS (Redux, Material UI, etc.), HTML5/CSS3 (SASS), Typescript, GraphQL, SocketIO',
                    'Backend: NodeJS/NestJS (RESTFull API, GraphQL, etc.), SQL/NoSQL, SocketIO',
                  ]}
                  svg={<TechnologiesSvg width={60} height={60} />}
                />
              </Fade>
            </Grid>
            <Grid item sm={6} md={4} xs={12}>
              <Fade duration={2000} delay={matchXsDown ? 0 : 2000}>
                <Card
                  animationDelay={2000}
                  title="FRONTEND FOCUSED"
                  svg={<FrontendSvg width={50} height={60} />}
                  text={[
                    'Main focus is frontend, as I am an expert on the visual part of web development, also I have big knowledge in backend as well, do it when necessary',
                  ]}
                />
              </Fade>
            </Grid>
          </Grid>
        </Wrapper>
      </div>
      <div className={classes.whiteContainer} />
      <Wrapper className={classes.wrapperContainer}>
        <TitleSection subTitle="RECENT WORK" title="What I've been up to" />
        <div className={classes.projectsContainer}>
          {homeProjectsData.map((project, index) => (
            <Project
              key={index}
              image={project.image}
              siteLink={project.siteLink}
              projectTitle={project.projectTitle}
              description={project.description}
              reverse={index % 2 != 0}
              imagePosition={index === homeProjectsData.length - 1 ? 'top left' : 'center'}
              testimonial={project.testimonial}
              noMargin={index === homeProjectsData.length - 1}
            />
          ))}
        </div>
        <SeeMoreHere to={PROJECTS_ROUTE} />

        <Divider variant="middle" className={clsx(styles.divider, styles.secondDivider)} />

        <TitleSection subTitle="TESTIMONIALS" title="What they’re saying" />

        <Fade bottom>
          <div className={classes.testimonialsContainer}>
            <Carousel
              plugins={[
                {
                  resolve: autoplayPlugin,
                  options: {
                    interval: 7000,
                  },
                },
                'infinite',
                'fastSwipe',
              ]}
            >
              {homeTestimonialsData.map((testimonial) => (
                <Testimonial
                  className={styles.testimonial}
                  key={testimonial.title}
                  title={testimonial.title}
                  text={testimonial.text}
                  src={testimonial.src}
                  alt={testimonial.clientName}
                  devTitle={testimonial.devTitle}
                />
              ))}
            </Carousel>
          </div>
        </Fade>

        <SeeMoreHere to={TESTIMONIALS_ROUTE} />

        <Divider variant="middle" className={clsx(styles.divider, styles.secondDivider)} />

        <TitleSection subTitle="Contact me" title="Get in Touch" />
        <Fade bottom>
          <div className={classes.workTogetherContainer}>
            <LetsWorkTogether />
          </div>
        </Fade>
      </Wrapper>
    </div>
  );
};

// <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

export default Main;
