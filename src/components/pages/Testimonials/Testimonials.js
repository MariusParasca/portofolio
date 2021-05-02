import TitleSection from 'components/shared/TitleSection/TitleSection';
import Wrapper from 'components/shared/Wrapper/Wrapper';
import React from 'react';
import Fade from 'react-reveal/Fade';

import { testimonialsData } from 'shared/data';
import Testimonial from '../../shared/Testimonial/Testimonial';
import classes from './Testimonials.module.css';

const Testimonials = (props) => {
  return (
    <Wrapper>
      <div className={classes.container}>
        <div className={classes.wrapText}>
          <TitleSection subTitle="TESTIMONIALS" title="What they're saying" />
        </div>
        {testimonialsData.map((testimonial) => (
          <Fade bottom>
            <div className={classes.testimonialContainer}>
              <Testimonial
                key={testimonial.title}
                title={testimonial.title}
                text={testimonial.text}
                src={testimonial.src}
                alt={testimonial.clientName}
                devTitle={testimonial.devTitle}
              />
            </div>
          </Fade>
        ))}
      </div>
    </Wrapper>
  );
};

Testimonials.propTypes = {};

export default Testimonials;
