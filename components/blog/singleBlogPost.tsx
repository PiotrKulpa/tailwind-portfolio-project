import { useRouter } from 'next/router';
import { documentToReactComponents as renderRichText } from '@contentful/rich-text-react-renderer';
import useContentfulQuery from '@/hooks/useContentfulQuery';
import { months } from '@/utils';

import { ContentfulCredentialProps } from '@/global-types';

const SingleBlogPost = ({ contentfulCredential }: ContentfulCredentialProps) => {
  const router = useRouter();
  const { id } = router.query;

  const { sys, fields: { title = '', entryText = '', imageUrl = '', content = {} } = {} } =
    useContentfulQuery({
      contentfulCredential,
      entryId: id,
    });

  console.log('RESULT', title);
  return (
    <section className="container mx-auto">
      <div className="mt-12 flex flex-row flex-wrap">
        {title && entryText && imageUrl && (
          <div key={sys.id} className="w-full p-5">
            <div className="flex flex-row gap-4">
              <div>
                <div className="w-20 h-36 text-primary font-primary text-center post-date bg-secondary flex flex-col items-center justify-center">
                  <p className="text-4xl underline">{new Date(sys.createdAt).getDate()}</p>
                  <p className="text-xl">{months[new Date(sys.createdAt).getMonth()]}</p>
                </div>
              </div>
              <div className="post-right">
                <div className="max-h-96 overflow-hidden">
                  <img src={imageUrl} className="align-middle h-auto" />
                </div>
                <h5 className="my-6 uppercase">{title}</h5>
                <p className="my-4 font-secondary font-light">
                  {new Date(sys.createdAt).toLocaleDateString()}
                </p>
                <p className="font-secondary font-light">{entryText}</p>
                <div className="rich-text my-4 text-xl">{renderRichText(content)}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SingleBlogPost;
