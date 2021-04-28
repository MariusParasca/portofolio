import React, { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';

import classes from './Main.module.css';
import { makeStyles } from '@material-ui/core';
import Projects from 'components/pages/Projects/Projects';
import TabsMenu from './TabsMenu/TabsMenu';
import Testimonials from 'components/pages/Testimonials/Testimonials';

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
  typographyH5Root: {
    color: '#ffffff',
    boxShadow: 'box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75)',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.3rem',
    },
  },
}));

const Main = (props) => {
  const { children } = props;

  const styles = useStyles();

  return (
    <div>
      <div className={classes.mainTextWrapper}>
        <div className={classes.avatarContainer}>
          <Avatar
            alt="Parasca Marius"
            classes={{
              root: styles.avatarRoot,
            }}
            src="/static/images/portrait.jpg"
          />
        </div>
        <div className={classes.quoteContainer}>
          <Typography variant="h5" classes={{ h5: styles.typographyH5Root }} align="center">
            Problem-solving, Proactive, Organized, Fast-learner type of person that is very passionate about Web
            Development. New technologies are always in my target for making a better product.
          </Typography>
        </div>
      </div>
      <div className={classes.tabsContainer}>
        <TabsMenu />
      </div>

      <div className={classes.menusContainer}>{children}</div>
    </div>
  );
};

export default Main;
