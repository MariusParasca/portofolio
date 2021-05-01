import React from 'react';
import PropTypes from 'prop-types';
import { Divider, makeStyles, Typography } from '@material-ui/core';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

import classes from './Card.module.css';

const useStyles = makeStyles((theme) => ({
  cardTitle: {
    fontWeight: 600,
    color: '#fff',
    fontSize: 24,
    marginTop: 20,
  },
  divider: {
    background: '#fff',
  },
  text: {
    marginTop: 20,
    fontFamily: 'Hind',
    lineHeight: 1.5,
    fontSize: 15,
    color: '#fff',
    maxWidth: 270,
    margin: '0 auto',
  },
}));

const Card = (props) => {
  const { title, text, svg, animationDelay } = props;

  const styles = useStyles();

  return (
    <div className={classes.container}>
      <Zoom delay={animationDelay}>
        <div className={classes.svgContainer}>{svg}</div>
      </Zoom>
      <Typography variant="h6" className={styles.cardTitle} align="center">
        {title}
      </Typography>
      <Fade>
        <div>
          {text.map((string, index) => (
            <Typography key={index} variant="body1" align="center" className={styles.text} display="block">
              {string}
            </Typography>
          ))}
        </div>
      </Fade>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.arrayOf(PropTypes.string),
  svg: PropTypes.node.isRequired,
  animationDelay: PropTypes.number,
};

Card.defaultProps = {
  animationDelay: 0,
  text: [],
};

export default Card;
