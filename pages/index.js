import Home from 'components/pages/Home/Home';
import Head from 'next/head';

const HomePage = () => {
  return (
    <>
      <Head>
        <meta property="og:url" content="https://mariusparasca.com" />
        <meta property="og:site_name" content="Expert in Web Development | Frontend focused | Marius Parasca" />
        <meta property="og:title" content="Expert in Web Development | Frontend Focused | Marius Parasca" />
        <meta name="twitter:title" content="Expert in Web Development | Frontend focused | Marius Parasca" />
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
