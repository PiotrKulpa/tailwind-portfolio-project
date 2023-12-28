import { FC, useEffect, useState } from 'react';
import { Gallery } from 'react-grid-gallery';
import Lightbox, { SlideImage } from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';

import { ContentfulCredentialProps, ContentType, CustomImage, OrderType } from '@/global-types';
import useContentfulQuery from '@/hooks/useContentfulQuery';

const WorkPage: FC<ContentfulCredentialProps> = ({ contentfulCredential }) => {
  const [index, setIndex] = useState(-1);

  const handleClick = (index: number, item: CustomImage) => setIndex(index);

  const { handleContentfulQuery, contentfulData: { items: workItems = [] } = {} } =
    useContentfulQuery();

  useEffect(() => {
    handleContentfulQuery({
      contentfulCredential,
      contentType: ContentType.Work,
      limit: 100,
      skip: 0,
      order: [OrderType.CreatedAt],
    });
  }, []);

  const slides: SlideImage[] = workItems.length
    ? workItems.map(
        ({
          fields: {
            image: {
              fields: {
                file: { url = '' },
              },
            },
            caption = '',
            width = 0,
            height = 0,
          },
        }) => ({
          type: 'image',
          src: url,
          width,
          height,
          description: caption,
        }),
      )
    : [];

  const images = workItems.map(
    ({
      fields: {
        image: {
          fields: {
            file: { url = 0 },
          },
        },
        title = '',
        caption = '',
        width = 0,
        height = 0,
      },
    }) => ({
      src: url,
      original: url,
      width,
      height,
      title,
      caption,
      customOverlay: (
        <div className="bg-secondary/30 w-full h-full">
          <h1 className="text-primary text-3xl p-2">{title}</h1>
          <p className="text-primary p-2">{caption}</p>
        </div>
      ),
    }),
  );

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

export const getStaticProps = async () => {
  return {
    props: {
      contentfulCredential: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  };
};
