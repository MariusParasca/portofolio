export const testimonialsData = [
  {
    title: 'Hendrik Beneke',
    text:
      'Working with Marius was a great experience. He successfully finished the ReactJS project. He is a true expert in React and all things frontend like HTML, CSS, etc. Communicating with him was always very easy and pleasant. I will work with him again in my next project.',
    src: '/static/images/avatars/hendrik.jfif',
    clientName: 'Hendrik Beneke',
    clientRank: 'CTO ShipStock',
    devTitle: 'React Developer',
  },
  {
    title: 'Fabio Rotondo',
    text: 'The project was big but he was up to expectations. Great team and great team work. :-)',
    src: '/static/images/avatars/fabio.jfif',
    clientName: 'Fabio Rotondo',
    clientRank: '',
    devTitle: 'Tech Lead',
  },
  {
    title: 'Ara',
    text:
      'Marius has been a perfect contractor, very professional, always available, consistently delivering top quality work. If you are looking for a professional full-stack React developer, he is the right guy for the job.',
    clientName: 'Ara',
    devTitle: 'Full Stack Developer',
  },
  {
    title: 'Thomas Oliver',
    text: 'Thanks for your help.',
    src: '/static/images/avatars/thomas.webp',
    alt: 'Thomas Oliver',
    devTitle: 'React Developer',
  },
];

export const projectsData = [
  {
    siteLink: 'https://pastorsline.com/',
    image: 'pastorsline',
    projectTitle: 'PastorLine App',
    description:
      'PastorLine is a fantastic tool for sending texts that helps organized, text, automate, email and call Churches. PastorLine has the best web interface for  Bulk Text Messaging Service, that is intuitive and easy to use',
    features: ['JavaScript', 'React', 'Material UI', 'React Router Dom', 'Axios', 'Redux', 'Redux-Thunk', 'Twillo'],
    testimonial: {
      text:
        'Hey @Marius Parasca just a note that I appreciate what you do for us. Your coding and thought process has helped us. Thank you',
      alt: 'Jason Alexis',
      clientName: 'Jason Alexis',
      clientRank: 'Founder',
      src: '/static/images/avatars/jason.jfif',
    },
  },
  {
    image: 'shipstockapp',
    projectTitle: 'ShipStock App',
    description:
      'ShipStock Application is a social network that connects all together with the maritime community. The application is similar to LinkedIn and offers different features like following people, creating multiple profiles, sending messages, post new feeds, edit them, filter them in collections, etc',
    features: [
      'JavaScript',
      'React',
      'React Infinity Scroll',
      'React Linkify',
      'Material UI',
      'React Mentions',
      'React Router Dom',
      'Axios',
      'Date Fns',
      'Auth0',
      'Redux',
    ],
    testimonial: {
      text:
        "Working with Marius was really great. He's a very experienced ReactJS developer. Communicating with him was very easy and always to the point. He really knows his stuff and proposed a lot of very good ideas. I will work with him in the future.",
      src: testimonialsData[0].src,
      clientName: testimonialsData[0].clientName,
      alt: testimonialsData[0].clientName,
      clientRank: testimonialsData[0].clientRank,
    },
  },
  {
    image: 'shipstock',
    projectTitle: 'ShipStock Landing Page',
    description:
      'ShipStock landing page is beautiful landing page where people can find more about the ShipStock community and what it can offer that is different for the other platforms',
    features: ['JavaScript', 'Webpack', 'HTML', 'CSS', 'Sass'],
  },
  {
    siteLink: 'http://colorchance.com',
    image: 'colorchance',
    projectTitle: 'Color Chance',
    description:
      'Color Chance is an application that generates random colors based on some settings that you set. This app is great for trying to find new colors for designing a website, banner, etc. The colors that are generated could be saved and downloaded in different formats: txt, image, and pdf',
    features: ['JavaScript', 'React', 'Material UI', 'Html2canvas', 'JSPdf', 'Redux', 'Chroma JS', 'Framer Motion'],
  },
  {
    key: 'extractcolor',
    image: 'extractcolor',
    projectTitle: 'Extract Color',
    description:
      'Extract Color is an application that extracts the main colors from an image. You are able to upload an image, search images by typing some words and take the main colors from a website that you like by typing the link of it. The colors that are generated could be saved and downloaded in different formats: txt, image, and pdf',
    features: [
      'JavaScript',
      'React',
      'Material UI',
      'Html2canvas',
      'JSPdf',
      'Redux',
      'Chroma JS',
      'Framer Motion',
      'Node-vibrant',
      'React Drop zone',
    ],
  },
];
