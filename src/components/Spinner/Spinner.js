import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from './Spinner.module.css';

const Spinner = props => {
  return (
    <div className={styles.container} style={{ height: props.height }}>
      <CircularProgress disableShrink />
    </div>
  );
};

export default Spinner;
