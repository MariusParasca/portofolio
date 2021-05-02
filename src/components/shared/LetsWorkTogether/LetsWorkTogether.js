import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
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
  contactTitleText: {
    fontSize: 26,
    color: '#0163A3',
    lineHeight: '1.6em',
    fontWeight: 700,
    marginBottom: 20,
  },
}));

const LetsWorkTogether = (props) => {
  const { className } = props;

  const styles = useStyles();

  return (
    <div>
      <Typography variant="h3" className={styles.contactTitleText}>
        Let's work together
      </Typography>
      <Typography variant="body1" className={styles.contactTextDescription}>
        Ready to start your next project? Looking for a quote? Maybe a more general question? Send me an email below and
        we’ll get right back to you.
      </Typography>
      <Typography variant="body1" className={styles.email}>
        <Typography variant="body2" display="inline" className={styles.contactTextDescription}>
          Email me:{' '}
        </Typography>
        marius@nowscriptsoftware.com
      </Typography>
    </div>
  );
};

LetsWorkTogether.propTypes = {
  className: PropTypes.string,
};

LetsWorkTogether.defaultProps = {
  className: '',
};

export default LetsWorkTogether;
