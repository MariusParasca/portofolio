import React, { useCallback, useState } from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CloseIcon from '@material-ui/icons/Close';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
  IconButton,
  Hidden,
  Modal,
  Link,
  makeStyles,
} from '@material-ui/core';

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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMoreButton = useCallback(() => {
    setIsModalOpen(!isModalOpen);
  }, [isModalOpen]);

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
          <CardMedia image={props.image} title={props.projectTitle} classes={{ root: styles.cardMediaRoot }} />
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
              <IconButton onClick={toggleMoreButton} classes={{ root: styles.iconButtonRoot }}>
                <MoreHorizIcon />
              </IconButton>
            </Hidden>
          </div>
        </div>
        <CardContent>
          <ProjectContent description={props.description} features={props.features} />
        </CardContent>
      </Card>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={isModalOpen}
        onClose={toggleMoreButton}
      >
        <div className={classes.modalContainer}>
          <div className={classes.exitContainer}>
            <div className={classes.existButton} onClick={toggleMoreButton}>
              <CloseIcon />
            </div>
          </div>
          {getGitHubComponent()}
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default Project;
