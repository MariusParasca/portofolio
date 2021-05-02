import React from 'react';
import PropTypes from 'prop-types';
import classes from './Project.module.css';
import { Avatar, Card, CardMedia, Link, makeStyles, Typography } from '@material-ui/core';
import { SIZE_LG } from 'shared/constants';
import LazyLoad from 'react-lazyload';
import clsx from 'clsx';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    boxShadow:
      '0 0 0 rgb(0 0 0 / 5%), 0 0 0 rgb(0 0 0 / 5%), 0 0 0 rgb(0 0 0 / 5%), 0 0 0 rgb(0 0 0 / 5%), 0 0 0 rgb(0 0 0 / 5%)',
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '0 20px 70px rgb(0 0 0 / 25%)',
    },
  },
  margin: {
    marginRight: 30,
    [theme.breakpoints.down('md')]: {
      marginRight: 0,
    },
  },
  flexReverse: {
    flexDirection: 'row-reverse',
  },
  titleTypo: {
    fontSize: 26,
    color: '#0163A3',
    lineHeight: '1.6em',
    fontWeight: 700,
    letterSpacing: '-.04em',
    marginBottom: 20,
    [theme.breakpoints.down('xs')]: {
      fontSize: 22,
    },
  },
  descriptionTypo: {
    color: 'rgb(164,171,178)',
    fontSize: 14,
    lineHeight: 1.9,
    fontFamily: 'Hind',
  },
  avatar: {
    backgroundColor: '#4DABF5',
    marginLeft: '5px',
    marginRight: '20px',
  },
  marginZero: {
    margin: 0,
  },
  clientName: {
    lineHeight: '1.5em',
    margin: 0,
    fontSize: 13,
    fontWeight: 700,
    color: '#0163A3',
  },
  clientRank: {
    lineHeight: '1.5em',
    fontSize: 12,
    fontFamily: 'Hind',
    color: '#a4abb2',
  },
}));

const Project = (props) => {
  const { siteLink, image, projectTitle, description, reverse, imagePosition, testimonial, noMargin } = props;

  const styles = useStyles();
  const customStyles = makeStyles((theme) => ({
    cardMediaRoot: {
      height: '337px',
      width: '555px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: imagePosition,
      backgroundImage: `url(/static/images/${image}-home.jpg)`,
      [theme.breakpoints.down('xs')]: {
        minHeight: '206px',
        minWidth: '340px',
        height: '100%',
        width: '100%',
      },
    },
  }))();

  return (
    <div className={clsx({ [classes.container]: true, [styles.flexReverse]: reverse, [styles.marginZero]: noMargin })}>
      <Fade bottom>
        <Card className={clsx({ [styles.cardRoot]: true, [styles.margin]: !reverse })}>
          <LazyLoad offset={100}>
            {siteLink ? (
              <Link href={siteLink || undefined} target={siteLink ? '_blank' : '_self'} disabled={!!siteLink}>
                <Fade left={!reverse} right={reverse} delay={500}>
                  <div className={customStyles.cardMediaRoot} />
                </Fade>
              </Link>
            ) : (
              <Fade left={!reverse} right={reverse} delay={500}>
                <div className={customStyles.cardMediaRoot} />
              </Fade>
            )}
          </LazyLoad>
        </Card>
      </Fade>
      <div className={clsx({ [classes.textContainer]: true, [styles.margin]: reverse })}>
        <Fade bottom>
          <div>
            <Typography variant="h4" className={styles.titleTypo}>
              {projectTitle}
            </Typography>
            <Typography className={styles.descriptionTypo}>{description}</Typography>
          </div>
        </Fade>
        {testimonial && testimonial.text && (
          <Fade bottom>
            <div>
              <div className={classes.testimonialQuote}>
                <p>{testimonial.text}</p>
              </div>
              <div className={classes.avatarContainer}>
                <Avatar className={styles.avatar} alt={testimonial.clientName} src={testimonial.src}>
                  {testimonial.alt?.charAt(0)}
                </Avatar>
                <div>
                  <Typography className={styles.clientName} variant="h5">
                    {testimonial.clientName}
                  </Typography>
                  <Typography className={styles.clientRank} variant="h6">
                    {testimonial.clientRank}
                  </Typography>
                </div>
              </div>
            </div>
          </Fade>
        )}
      </div>
    </div>
  );
};

Project.propTypes = {
  siteLink: PropTypes.string,
  image: PropTypes.string.isRequired,
  projectTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
  imagePosition: PropTypes.string,
  testimonial: PropTypes.shape({
    text: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    src: PropTypes.string,
  }),
  noMargin: PropTypes.bool,
};

Project.defaultProps = {
  siteLink: '',
  reverse: false,
  imagePosition: 'center',
  testimonial: {
    text: '',
    alt: '',
  },
  noMargin: false,
};

export default Project;
