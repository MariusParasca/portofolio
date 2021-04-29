import React, { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Lottie from 'react-lottie';
import Fade from 'react-reveal/Fade';

import classes from './Main.module.css';
import { Divider, Grid, makeStyles } from '@material-ui/core';
import Projects from 'components/pages/Projects/Projects';
import TabsMenu from './TabsMenu/TabsMenu';
import Testimonials from 'components/pages/Testimonials/Testimonials';
import * as programmingAnimationData from '../../../public/static/animations/programming.json';
import Wrapper from 'components/shared/Wrapper/Wrapper';
import Card from './Card/Card';

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

  return (
    <div className={classes.overflowContainer}>
      <div className={classes.mainWrapper}>
        <div className={classes.infoContainer}>
          <Fade left>
            <div className={classes.textContainer}>
              <Typography variant="h1" className={styles.typographyH1}>
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
        {/* <div className={classes.avatarContainer}>
          <Avatar
            alt="Parasca Marius"
            classes={{
              root: styles.avatarRoot,
            }}
            src="/static/images/portrait.jpg"
          />
        </div> */}
        {/* <div className={classes.quoteContainer}>
          <Typography variant="h5" classes={{ h5: styles.typographyH5Root }} align="center">
            Problem-solving, Proactive, Organized, Fast-learner type of person that is very passionate about Web
            Development. New technologies are always in my target for making a better product.
          </Typography>
        </div> */}
      </div>

      <div className={classes.colorContainer} />
      <div className={classes.blueContainer}>
        <Fade duration={1500}>
          <Typography variant="subtitle1" className={styles.typographySubtitle1}>
            Expert in Web Development
          </Typography>
        </Fade>
        <Wrapper>
          <Grid container justify="center" spacing={5}>
            <Grid item sm={4}>
              <Fade duration={1500}>
                <Card title="PASSION" />
              </Fade>
            </Grid>
            <Grid item sm={4}>
              <Fade duration={1500}>
                <Card title="TECHNOLOGIES" />
              </Fade>
            </Grid>
            <Grid item sm={4}>
              <Fade duration={1500}>
                <Card title="FRONTEND FOCUSED" />
              </Fade>
            </Grid>
          </Grid>
          , backend when neccessery
        </Wrapper>
      </div>
      <div className={classes.whiteContainer} />
      <Wrapper className={classes.wrapperContainer}>{children}</Wrapper>
    </div>
  );
};

export default Main;
