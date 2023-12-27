import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { ContentType, ContentfulCredentialProps, OrderType } from '@/global-types';
import useContentfulQuery from '@/hooks/useContentfulQuery';
import { months } from '@/utils';
import Link from 'next/link';

import { PaginationType } from '@/global-types';

import Pagination from '@/components/pagination';

const Blog = ({ contentfulCredential }: ContentfulCredentialProps) => {
  const {
    query: { page = '0' },
  } = useRouter();

  const {
    handleContentfulQuery,
    contentfulData: { total, items = [] },
  } = useContentfulQuery({
    contentfulCredential,
    contentType: ContentType.Blog,
    limit: PaginationType.BlogEntriesToShow,
    skip: Number(page) * PaginationType.BlogEntriesToShow,
    order: [`-${OrderType.CreatedAt}`],
  });

  console.log(total);

  useEffect(() => {
    handleContentfulQuery();
    console.log({ page });
  }, [page]);

  return (
    <section className="container mx-auto">
      <h3 className="text-center">Stay update</h3>
      <h4 className="uppercase text-center mt-5">with our blog</h4>
      <div className="mt-12 flex flex-row flex-wrap">
        {items.length &&
          items.map(({ sys: { id, createdAt }, fields: { title, entryText, imageUrl } }) => {
            return (
              <div key={id} className="w-full lg:w-1/3 p-5">
                <div className="flex flex-row gap-4">
                  <div>
                    <div className="w-20 h-36 text-primary font-primary text-center post-date bg-secondary flex flex-col items-center justify-center">
                      <p className="text-4xl underline">{new Date(createdAt).getDate()}</p>
                      <p className="text-xl">{months[new Date(createdAt).getMonth()]}</p>
                    </div>
                  </div>
                  <div className="post-right">
                    <div className="max-h-80 overflow-hidden">
                      <img src={imageUrl} className="align-middle h-auto" />
                    </div>
                    <h5 className="my-4 uppercase">{title}</h5>
                    <p className="my-4 font-secondary font-light">
                      {new Date(createdAt).toLocaleDateString()}
                    </p>
                    <p className="font-secondary font-light">{entryText}</p>
                    <Link
                      className="uppercase flex justify-center items-center border w-40 h-12 text-center my-4 border-gray hover:bg-secondary hover:text-primary"
                      href={`blog/${id}`}
                    >
                      <p>Read more</p>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <Pagination totalEntries={total} entriesToShow={PaginationType.BlogEntriesToShow} />
    </section>
  );
};

export default Blog;
