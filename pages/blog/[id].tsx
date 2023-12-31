import { FC } from 'react';

import SingleBlogPost from '@/components/blog/singleBlogPost';
import { ContentfulCredentialProps } from '@/global-types';

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
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  };
};
