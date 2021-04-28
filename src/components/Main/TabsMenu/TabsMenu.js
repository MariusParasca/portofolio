import React from 'react';
import classes from './TabsMenu.module.css';
import { NavLink } from 'react-router-dom';
import NextLink from 'components/shared/NextLink/NextLink';

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
      <NextLink route="/contact" className={classes.link} activeClassName={classes.linkActive}>
        Contact
      </NextLink>
    </div>
  );
};

TabsMenu.propTypes = {};

export default TabsMenu;
