import dynamic from 'next/dynamic';

const Carousel = dynamic(() => import('@brainhubeu/react-carousel'), {
  ssr: false,
});
const autoplayPlugin = dynamic(() => import('@brainhubeu/react-carousel').then((mod) => mod.autoplayPlugin), {
  ssr: false,
});

import '@brainhubeu/react-carousel/lib/style.css';

export default Carousel;
export { autoplayPlugin };
