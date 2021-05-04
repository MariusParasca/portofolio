import AboutMe from 'components/pages/AboutMe/AboutMe';
import Head from 'next/head';

const AboutMePage = () => {
  return (
    <>
      <Head>
        <title>Expert in Web Development | Frontend focused | About Me</title>
        <meta property="og:url" content="https://mariusparasca.com/about-me" />
        <meta property="og:site_name" content="Expert in Web Development | Frontend focused | About Me" />
        <meta property="og:title" content="Expert in Web Development | Frontend Focused | About Me" />
        <meta name="twitter:title" content="Expert in Web Development | Frontend focused | About Me" />
      </Head>
      <AboutMe />
    </>
  );
};

export default AboutMePage;
