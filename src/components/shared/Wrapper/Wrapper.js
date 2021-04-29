import React from 'react';
import PropTypes from 'prop-types';

import classes from './Wrapper.module.css';
import clsx from 'clsx';

const Wrapper = (props) => {
  const { children, className } = props;

  return <div className={clsx(classes.container, className)}>{children}</div>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Wrapper.defaultProps = {
  className: '',
};

export default Wrapper;
