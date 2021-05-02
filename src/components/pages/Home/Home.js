import React, { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Lottie from 'react-lottie';
import Fade from 'react-reveal/Fade';

import classes from './Home.module.css';
import { Divider, Grid, makeStyles } from '@material-ui/core';
import Projects from 'components/pages/Projects/Projects';
import TabsMenu from './TabsMenu/TabsMenu';
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

const homeProjectsData = projectsData.slice(0, 3);
const homeTestimonialsData = testimonialsData.slice(0, 2);

const useStyles = makeStyles((theme) => ({
  avatarRoot: {
    width: 300,
    height: 300,
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    border: '3px solid white',
    [theme.breakpoints.down('sm')]: {
      width: 240,
      height: 240,
    },
  },
  typographyH1: {
    color: '#0062a3',
    textShadow: '0px 0px 1px rgba(150, 150, 150, 1)',
    fontSize: '3rem',
    fontWeight: 600,
  },
  typographyH2: {
    color: '#FE3D0C',
    textShadow: '0px 0px 1px rgba(150, 150, 150, 0.5)',
    fontSize: '2rem',
    fontWeight: 500,
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
  contactTitleText: {
    fontSize: 26,
    color: '#0163A3',
    lineHeight: '1.6em',
    fontWeight: 700,
    marginBottom: 20,
  },
  contactTextDescription: {
    color: 'rgb(164,171,178)',
    fontSize: 18,
    lineHeight: 1.9,
    fontFamily: 'Hind',
  },
  email: {
    fontWeight: 600,
    fontFamily: 'Hind',
    color: 'rgb(164,171,178)',
    fontSize: 18,
    marginTop: 20,
  },
}));

const Main = (props) => {
  const { children } = props;

  const styles = useStyles();

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
              <TitleSection subTitle="WEB DEVELOPMENT" title="Freelancing Services" />
            </div>
          </Fade>
          <Lottie options={defaultOptions} height={400} width={400} style={{ margin: 0 }} />
        </div>
        <div className={classes.emptyDesignContainer} />
        {/* <div className={classes.avatarContainer}>
          <Avatar
            alt="Parasca Marius"
            classes={{
              root: styles.avatarRoot,
            }}
            src="/static/images/portrait.jpg"
          />
        </div> */}
        {/* Over 4+ years of development experience specialized in Javascript/TypeScript.
        Working on frontend is my favorite part in web development.
        Built loads of incredible successfully projects.
        Most productive freelancer ever seen.
        Computer Science degree

        Contact:
        marius@nowscriptsoftware.com */}
        {/* <div className={classes.quoteContainer}>
          <Typography variant="h5" classes={{ h5: styles.typographyH5Root }} align="center">
            Problem-solving, Proactive, Organized, Fast-learner type of person that is very passionate about Web
            Development. New technologies are always in my target for making a better product.
          </Typography>
        </div> */}
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
            <Grid item sm={4}>
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
            <Grid item sm={4}>
              <Fade duration={2000} delay={1000}>
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
            <Grid item sm={4}>
              <Fade duration={2000} delay={2000}>
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
        <SeeMoreHere to="/projects" />

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

        <SeeMoreHere to="/testimonials" />

        <Divider variant="middle" className={clsx(styles.divider, styles.secondDivider)} />

        <TitleSection subTitle="Contact me" title="Get in Touch" />
        <div className={classes.contactContainer}>
          <Typography variant="h3" className={styles.contactTitleText}>
            Let's work together
          </Typography>
          <Typography variant="body1" className={styles.contactTextDescription}>
            Ready to start your next project? Looking for a quote? Maybe a more general question? Send me an email below
            and we’ll get right back to you.
          </Typography>
          <Typography variant="body1" className={styles.email}>
            <Typography variant="body2" display="inline" className={styles.contactTextDescription}>
              Email:{' '}
            </Typography>
            marius@nowscriptsoftware.com
          </Typography>
        </div>
      </Wrapper>
    </div>
  );
};

// <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

export default Main;
