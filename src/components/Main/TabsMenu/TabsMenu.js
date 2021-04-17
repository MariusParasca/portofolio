import React from 'react'
import classes from './TabsMenu.module.css';
import {
  NavLink
} from "react-router-dom";

const TabsMenu = props => {
  return (
    <div className={classes.container}>
        <NavLink exact to="/projects" className={classes.link} activeClassName={classes.linkActive}
          isActive={(match, location) => {
            if (match || location.pathname === "/") {
              return true;
            }

            return false;
          }}
        >
          Projects
        </NavLink>
        <NavLink exact to="/reviews" className={classes.link} activeClassName={classes.linkActive}>
          Reviews
        </NavLink>
    </div>
  )
}

TabsMenu.propTypes = {

}

export default TabsMenu
