import React from 'react';
import Testimonial from './Testimonial/Testimonial';
import classes from './Testimonials.module.css';

const Testimonials = (props) => {
  return (
    <div className={classes.container}>
      <Testimonial
        title="Fabio Rotondo"
        text="The project was big but he was up to expectations.
        Great team and great team work. :-)"
        src="/static/images/avatars/fabio.jfif"
        alt="Fabio Rotondo"
        devTitle="Tech Lead"
      />
      <Testimonial
        title="Hendrik Beneke"
        text="Working with Marius was a great experience. He successfully finished the ReactJS project. He is a true expert in React and all things frontend like HTML, CSS, etc. 
          Communicating with him was always very easy and pleasant. I will work with him again in my next project."
        src="/static/images/avatars/hendrik.jfif"
        atl="Hendrik Beneke"
        devTitle="React Developer"
      />
      <Testimonial
        title="Ara"
        text="Marius has been a perfect contractor, very professional, always available, consistently delivering top quality work. If you are looking for a professional full-stack React developer, he is the right guy for the job."
        alt="Ara"
        devTitle="Full Stack Developer"
      />
      <Testimonial
        title="Thomas Oliver"
        text="Thanks for your help."
        src="/static/images/avatars/thomas.webp"
        alt="Thomas Oliver"
        devTitle="React Developer"
      />
    </div>
  );
};

Testimonials.propTypes = {};

export default Testimonials;
