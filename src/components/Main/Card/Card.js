import React from 'react';
import PropTypes from 'prop-types';
import { Divider, makeStyles, Typography } from '@material-ui/core';
import classes from './Card.module.css';

const useStyles = makeStyles((theme) => ({
  cardTitle: {
    fontWeight: 600,
    color: '#fff',
    fontSize: 24,
  },
  divider: {
    background: '#fff',
  },
}));

const Card = (props) => {
  const { title } = props;

  const styles = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h6" className={styles.cardTitle} align="center">
        {title}
      </Typography>
      <Divider className={styles.divider} variant="middle" />
      <div className={classes.ulContainer}>
        <ul>
          <li>Hei</li>
        </ul>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Card;
