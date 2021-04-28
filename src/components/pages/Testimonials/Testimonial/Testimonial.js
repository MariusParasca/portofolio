import React from 'react';
import Rating from '@material-ui/lab/Rating';
import PropTypes from 'prop-types';
import { Avatar, Card, makeStyles, Typography, useMediaQuery } from '@material-ui/core';

import DoubleQuotesSvg from '../../../../svgs/double-quotes.svg';
import classes from './Testimonial.module.css';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    maxWidth: 640,
    padding: '25px 25px 35px 25px',
    marginTop: 35,
    marginBottom: 35,
    position: 'relative',
    overflow: 'inherit',
    boxSizing: 'border-box',
  },
  title: {
    marginBottom: 10,
    marginTop: 40,
  },
  rating: {
    marginLeft: 0,
  },
  avatar: {
    width: 90,
    height: 90,
    position: 'absolute',
    top: -35,
    left: 35,
    fontSize: 35,
    backgroundColor: '#4dabf5',
  },
  devTitle: {
    position: 'absolute',
    right: 15,
    top: 8,
    fontWeight: 600,
  },
  ratingText: {
    marginLeft: 15,
  },
}));

const Testimonial = (props) => {
  const { title, text, src, alt, devTitle } = props;

  const styles = useStyles();

  const matchXS = useMediaQuery((theme) => theme.breakpoints.down('xs'));

  return (
    <Card className={styles.card}>
      <Typography variant="body1" className={styles.devTitle}>
        <Typography variant="body2" display={matchXS ? 'block' : 'inline'}>
          My role:{' '}
        </Typography>
        {devTitle}
      </Typography>
      <Avatar className={styles.avatar} alt={alt} src={src}>
        {alt?.charAt(0)}
      </Avatar>
      <Typography variant="h5" className={styles.title}>
        {title}
      </Typography>
      <div className={classes.ratingContainer}>
        <Rating name="read-only" value={5} readOnly size="large" className={styles.rating} />
        <Typography variant="caption" className={styles.ratingText}>
          <strong>5.00</strong> out of 5
        </Typography>
      </div>
      <div className={classes.textContainer}>
        <Typography variant="body1">
          <DoubleQuotesSvg height={15} className={classes.firstQuotes} />
          {text}
          <DoubleQuotesSvg height={15} className={classes.lastQuotes} />
        </Typography>
      </div>
    </Card>
  );
};

Testimonial.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  src: PropTypes.string,
  alt: PropTypes.string,
  devTitle: PropTypes.string.isRequired,
};

export default Testimonial;
