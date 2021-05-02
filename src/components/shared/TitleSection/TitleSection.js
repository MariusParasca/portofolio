import { makeStyles, Typography } from '@material-ui/core';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles(() => ({
  recentWorkTypo: {
    fontSize: 14,
    fontWeight: 600,
    color: '#FE3D0C',
  },
  whatWeAreOnTypo: {
    color: '#0062a3',
    textShadow: '0px 0px 1px rgba(150, 150, 150, 1)',
    fontSize: '2.7rem',
    fontWeight: 700,
  },
}));

const TitleSection = (props) => {
  const { subTitle, title } = props;

  const styles = useStyles();

  return (
    <Fade bottom>
      <Typography variant="h6" align="center" className={styles.recentWorkTypo}>
        {subTitle}
      </Typography>
      <Typography variant="h1" className={styles.whatWeAreOnTypo} align="center">
        {title}
      </Typography>
    </Fade>
  );
};

export default TitleSection;
