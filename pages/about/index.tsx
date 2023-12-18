import { FC } from 'react';
import About from '@/components/about';
import { ContentfulCredentialProps } from '@/global-types';

export const AboutPage: FC<ContentfulCredentialProps> = ({ contentfulCredential }) => {
  return <About contentfulCredential={contentfulCredential} />;
};

export default AboutPage;

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
