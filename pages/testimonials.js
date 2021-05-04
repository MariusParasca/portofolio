import Head from 'next/head';

const { default: Testimonials } = require('components/pages/Testimonials/Testimonials');

const TestimonialsPage = () => {
  return (
    <>
      <Head>
        <title>Expert in Web Development | Frontend focused | Testimonials</title>
        <meta property="og:url" content="https://mariusparasca.com/testimonials" />
        <meta property="og:site_name" content="Expert in Web Development | Frontend focused | Testimonials" />
        <meta property="og:title" content="Expert in Web Development | Frontend Focused | Testimonials" />
        <meta name="twitter:title" content="Expert in Web Development | Frontend focused | Testimonials" />
      </Head>
      <Testimonials />
    </>
  );
};

export default TestimonialsPage;
