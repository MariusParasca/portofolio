import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from 'components/shared/Wrapper/Wrapper';
import { Avatar, makeStyles, Typography } from '@material-ui/core';
import Fade from 'react-reveal/Fade';

import classes from './AboutMe.module.css';
import TitleSection from 'components/shared/TitleSection/TitleSection';
import LetsWorkTogether from 'components/shared/LetsWorkTogether/LetsWorkTogether';

const useStyles = makeStyles((theme) => ({
  avatarRoot: {
    width: 300,
    height: 300,
    border: '3px solid white',
    boxShadow: '0 20px 25px rgb(0 0 0 / 25%)',
    '&:hover': {
      boxShadow: '0 20px 70px rgb(0 0 0 / 25%)',
    },
    [theme.breakpoints.down('md')]: {
      width: 260,
      height: 260,
    },
    [theme.breakpoints.down('sm')]: {
      width: 240,
      height: 240,
    },
  },
}));

const AboutMe = (props) => {
  const styles = useStyles();

  return (
    <Wrapper>
      <div className={classes.container}>
        <TitleSection subTitle="ABOUT ME" title="Why working with me?" />
        <Fade>
          <div className={classes.content}>
            <div className={classes.avatarContainer}>
              <Avatar
                alt="Parasca Marius"
                classes={{
                  root: styles.avatarRoot,
                }}
                src="/static/images/portrait.jpg"
              />
            </div>
            <div>
              <ul className={classes.textDescription}>
                <li>Over 4+ years of development experience specialized in Javascript/TypeScript.</li>
                <li>Built loads of incredible successfully projects. All the clients super satisfied by my work.</li>
                <li>
                  Most productive freelancer you will ever see. When I work I am in the focus mode which brings a lots
                  of productivity.
                </li>
                <li>
                  NOT a simple coder... True expert in Web Development (especially on frontend) with critical thinking
                  and problem-solving skills, organized and fast-learner as well.
                </li>
                <li>
                  Computer Science degree which builds on the crucial skill a developer should have: critical thinking
                  and problem-solving skills.
                </li>
              </ul>
              <Fade bottom>
                <div className={classes.workTogetherContainer}>
                  <LetsWorkTogether />
                </div>
              </Fade>
            </div>
          </div>
        </Fade>
      </div>
    </Wrapper>
  );
};

AboutMe.propTypes = {};

export default AboutMe;
