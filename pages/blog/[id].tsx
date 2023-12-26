import { FC } from 'react';
import { ContentfulCredentialProps } from '@/global-types';

import SingleBlogPost from '@/components/blog/singleBlogPost';

const BlogPostPage: FC<ContentfulCredentialProps> = ({ contentfulCredential }) => {
  return (
    <div>
      <SingleBlogPost contentfulCredential={contentfulCredential} />
    </div>
  );
};

export default BlogPostPage;

export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  };
};

export const getStaticProps = async () => {
  return {
    props: {
      contentfulCredential: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || null,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || null,
      },
    },
  };
};
