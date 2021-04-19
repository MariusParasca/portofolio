import React from 'react';
import classes from './TabsMenu.module.css';
import { NavLink } from 'react-router-dom';
import NextLink from 'components/NextLink/NextLink';

const TabsMenu = (props) => {
  return (
    <div className={classes.container}>
      <NextLink
        route="/projects"
        className={classes.link}
        activeClassName={classes.linkActive}
        isActive={(pathname) => {
          if (pathname === '/' || pathname === '/projects') {
            return true;
          }

          return false;
        }}
      >
        Projects
      </NextLink>
      <NextLink route="/testimonials" className={classes.link} activeClassName={classes.linkActive}>
        Testimonials
      </NextLink>
    </div>
  );
};

TabsMenu.propTypes = {};

export default TabsMenu;
