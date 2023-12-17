import { useState } from 'react';
import { Gallery } from 'react-grid-gallery';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/styles.css';

import { workImages } from '@/utils';
import { CustomImage } from '@/global-types';

const slides = workImages.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
  description: 'Slide description',
}));

const images = workImages.map(image => ({
  ...image,
  customOverlay: (
    <div className="bg-secondary/30 w-full h-full">
      <h1 className="text-primary text-3xl p-2 shadow-md">{image.title}</h1>
      <p className="text-primary p-2 shadow-md">{image.caption}</p>
    </div>
  ),
}));

const WorkPage = () => {
  const [index, setIndex] = useState(-1);

  const handleClick = (index: number, item: CustomImage) => setIndex(index);

  return (
    <div className="container m-auto">
      <div className="text-center m-12">
        <h3 className="">Check out and enjoy</h3>
        <h4 className="uppercase">my great work</h4>
      </div>
      <Gallery images={images} onClick={handleClick} enableImageSelection={false} rowHeight={300} />
      <Lightbox
        plugins={[Captions]}
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        styles={{ container: { backgroundColor: 'rgba(0, 0, 0, .8)', columnGap: 0 } }}
      />
    </div>
  );
};

export default WorkPage;
