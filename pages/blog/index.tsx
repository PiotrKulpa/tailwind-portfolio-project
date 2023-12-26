import { FC } from 'react';
import Blog from '@/components/blog';
import { ContentfulCredentialProps } from '@/global-types';

const BlogPage: FC<ContentfulCredentialProps> = ({ contentfulCredential }) => {
  return (
    <div>
      <Blog contentfulCredential={contentfulCredential} />
    </div>
  );
};

export default BlogPage;

export const getStaticProps = async () => {
  return {
    props: {
      contentfulCredential: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || '',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
      },
    },
  };
};
