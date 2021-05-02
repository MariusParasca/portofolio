import { Link as LinkMaterialUI, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

const useStyles = makeStyles((theme) => ({
  link: {
    '&': {
      cursor: 'pointer',
      textDecoration: 'none',
      color: 'inherit',
    },
    '&:hover': {
      textDecoration: 'none',
    },
  },
  active: {
    color: '#e6e6e6',
  },
}));

const NextLink = (props) => {
  const { route, className, children, activeClassName, isActive } = props;

  const styles = useStyles();

  const router = useRouter();

  let currentActiveClassName = '';

  if (isActive && isActive(router.pathname)) currentActiveClassName = activeClassName ? activeClassName : styles.active;
  else if (router.pathname === route) currentActiveClassName = activeClassName ? activeClassName : styles.active;

  return (
    <Link as={route} href={route}>
      <a className={clsx(styles.link, className, currentActiveClassName)}>{children}</a>
    </Link>
  );
};

NextLink.propTypes = {
  route: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  activeClassName: PropTypes.string,
  isActive: PropTypes.func,
};

NextLink.defaultProps = {
  className: '',
  activeClassName: undefined,
};

export default NextLink;
