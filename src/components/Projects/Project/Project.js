import React, { useCallback, useState } from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
  IconButton,
  Hidden,
  Link,
  Menu,
  MenuItem,
  makeStyles,
} from '@material-ui/core';
import LazyLoad from 'react-lazyload';

import GitHubIcon from 'components/GitHubIcon/GitHubIcon';
import ProjectContent from './ProjectContent/ProjectContent';
import classes from './Project.module.css';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    marginTop: '35px',
    boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.5)',
  },
  cardMediaRoot: {
    height: '450px',
    backgroundPosition: 'top',
    [theme.breakpoints.down('xs')]: {
      height: '450px',
    },
  },
  dividerVertical: {
    backgroundColor: '#ffffff',
    height: '60px',
    [theme.breakpoints.down('sm')]: {
      height: 0,
    },
  },
  typographyRoot: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem',
    },
    '&:hover': {
      opacity: '0.5',
      cursor: 'pointer',
    },
  },
  titleLinkRoot: {
    '&': {
      color: '#ffffff',
    },
    '&:hover': {
      textDecoration: 'none',
    },
  },
  iconButtonRoot: {
    color: '#ffffff',
  },
}));

const Project = props => {
  const styles = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = useCallback(event => {
    setAnchorEl(event.currentTarget);
  }, []);

  const closeMenu = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const getGitHubComponent = useCallback(() => {
    return (
      <React.Fragment>
        <div className={classes.iconContainer}>
          <GitHubIcon text={props.firstGitHubText} color="#ffffff" link={props.firstGitHubLink} />
        </div>
        {props.secondGitHubText && props.secondGitHubLink && (
          <React.Fragment>
            <Divider orientation="vertical" classes={{ vertical: styles.dividerVertical }} />
            <div className={classes.secondIconContainer}>
              <GitHubIcon text={props.secondGitHubText} color="#ffffff" link={props.secondGitHubLink} />
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }, [props, styles]);

  return (
    <React.Fragment>
      <Card variant="outlined" classes={{ root: styles.cardRoot }}>
        <div className={classes.cardMediaContainer}>
          <LazyLoad offset={100}>
            <CardMedia image={props.image} title={props.projectTitle} classes={{ root: styles.cardMediaRoot }} />
          </LazyLoad>
          <div className={classes.emptyContainer} />
          <div className={classes.bannerContainer}>
            <div className={classes.bannerTitleContainer}>
              <Link href="#" classes={{ root: styles.titleLinkRoot }}>
                <Typography variant="h5" classes={{ root: styles.typographyRoot }}>
                  {props.projectTitle}
                </Typography>
              </Link>
            </div>
            <Hidden smDown implementation="css" className={classes.hiddenContainer}>
              {getGitHubComponent()}
            </Hidden>
            <Hidden mdUp implementation="css" className={classes.iconHiddenContainer}>
              <IconButton onClick={openMenu} classes={{ root: styles.iconButtonRoot }}>
                <MoreHorizIcon />
              </IconButton>
              <Menu keepMounted open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={closeMenu}>
                <MenuItem>
                  <GitHubIcon text={props.firstGitHubText} color="#ffffff" link={props.firstGitHubLink} />
                </MenuItem>
                {props.secondGitHubText && props.secondGitHubLink && (
                  <MenuItem>
                    <GitHubIcon text={props.secondGitHubText} color="#ffffff" link={props.secondGitHubLink} />
                  </MenuItem>
                )}
              </Menu>
            </Hidden>
          </div>
        </div>
        <CardContent>
          <ProjectContent description={props.description} features={props.features} />
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default Project;
