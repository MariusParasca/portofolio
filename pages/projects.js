import Projects from 'components/pages/Projects/Projects';
import Head from 'next/head';

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <title>Expert in Web Development | Frontend focused | Projects</title>
        <meta property="og:url" content="https://mariusparasca.com/projects" />
        <meta property="og:site_name" content="Expert in Web Development | Frontend focused | Projects" />
        <meta property="og:title" content="Expert in Web Development | Frontend Focused | Projects" />
        <meta name="twitter:title" content="Expert in Web Development | Frontend focused | Projects" />
      </Head>
      <Projects />
    </>
  );
};

export default ProjectsPage;
