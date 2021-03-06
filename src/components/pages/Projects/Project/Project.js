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
import Fade from 'react-reveal/Fade';
import LazyLoad from 'react-lazyload';

import GitHubIcon from 'components/shared/GitHubIcon/GitHubIcon';
import { SIZE_LG, SIZE_MD, SIZE_SM, SIZE_XS } from 'shared/constants';
import ProjectContent from './ProjectContent/ProjectContent';
import classes from './Project.module.css';

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    marginTop: '70px',
    boxShadow: '0 0 20px rgb(0 0 0 / 15%)',
    '&:hover': {
      boxShadow: '0 20px 70px rgb(0 0 0 / 25%)',
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
    color: '#fff',
    fontWeight: 600,
    letterSpacing: '-.01em',
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

const Project = (props) => {
  const styles = useStyles();
  const customStyles = makeStyles((theme) => ({
    cardMediaRoot: {
      cursor: 'pointer',
      height: '450px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top left',
      backgroundImage: `url(/static/images/${props.image}-${SIZE_LG}.jpg)`,
      [theme.breakpoints.down('md')]: {
        backgroundImage: `url(/static/images/${props.image}-${SIZE_MD}.jpg)`,
      },
      [theme.breakpoints.down('sm')]: {
        backgroundImage: `url(/static/images/${props.image}-${SIZE_SM}.jpg)`,
      },
      [theme.breakpoints.down('xs')]: {
        backgroundImage: `url(/static/images/${props.image}-${SIZE_XS}.jpg)`,
      },
    },
  }))();

  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const closeMenu = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const LinkWrapper = ({ children }) => (
    <Link
      href={props.siteLink || undefined}
      target={props.siteLink ? '_blank' : '_self'}
      disabled={!!props.siteLink}
      classes={{ root: styles.titleLinkRoot }}
    >
      {children}
    </Link>
  );

  return (
    <React.Fragment>
      <Card variant="outlined" classes={{ root: styles.cardRoot }}>
        <div className={classes.cardMediaContainer}>
          <LazyLoad offset={100}>
            {props.siteLink ? (
              <LinkWrapper>
                <Fade left>
                  <CardMedia title={props.projectTitle} classes={{ root: customStyles.cardMediaRoot }} />
                </Fade>
              </LinkWrapper>
            ) : (
              <Fade left>
                <CardMedia title={props.projectTitle} classes={{ root: customStyles.cardMediaRoot }} />
              </Fade>
            )}
          </LazyLoad>
          <div className={classes.emptyContainer} />
          <div className={classes.bannerContainer}>
            <div className={classes.bannerTitleContainer}>
              {props.siteLink ? (
                <LinkWrapper>
                  <Typography
                    variant="h5"
                    classes={{
                      root: styles.typographyRoot,
                    }}
                  >
                    {props.projectTitle}
                  </Typography>
                </LinkWrapper>
              ) : (
                <Typography
                  variant="h5"
                  classes={{
                    root: styles.typographyRoot,
                  }}
                >
                  {props.projectTitle}
                </Typography>
              )}
            </div>
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
