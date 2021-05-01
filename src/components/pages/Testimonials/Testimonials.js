import React from 'react';
import { testimonialsData } from 'shared/data';
import Testimonial from './Testimonial/Testimonial';
import classes from './Testimonials.module.css';

const Testimonials = (props) => {
  return (
    <div className={classes.container}>
      {testimonialsData.map((testimonial) => (
        <Testimonial
          title={testimonial.title}
          text={testimonial.text}
          src={testimonial.src}
          alt={testimonial.alt}
          devTitle={testimonial.devTitle}
        />
      ))}
    </div>
  );
};

Testimonials.propTypes = {};

export default Testimonials;
