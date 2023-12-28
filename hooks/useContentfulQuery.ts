import { createClient } from 'contentful';
import { useCallback, useContext, useState } from 'react';

import { ContentfulQueryParams } from '@/global-types';
import { AppContext } from '@/utils';

interface ContentfulQueryHookParams {
  contentfulData: any;
  handleContentfulQuery: () => ContentfulQueryParams;
}

// TODO: fix types
const useContentfulQuery = () => {
  const [contentfulData, setContentfulData] = useState<any>({});
  const { setLoading } = useContext(AppContext);

  const handleContentfulQuery = useCallback(
    ({
      entryId,
      contentfulCredential,
      contentType,
      limit = 100,
      skip = 0,
      order,
    }: ContentfulQueryParams) => {
      setLoading(true);

      const client = createClient({
        space: contentfulCredential.spaceId,
        accessToken: contentfulCredential.accessToken,
      });

      if (entryId) {
        client
          .getEntry(entryId)
          .then(response => {
            if (response) {
              setContentfulData(response);
            }
          })
          .catch(error => console.log(error))
          .finally(() => {
            setLoading(false);
          });
      }

      if (typeof contentType === 'string') {
        client
          .getEntries({ content_type: contentType, limit, skip, order })
          .then(response => {
            if (response) {
              setContentfulData(response);
            }
          })
          .catch(error => console.log(error))
          .finally(() => {
            setLoading(false);
          });
      }

      if (Array.isArray(contentType)) {
        const allPromises: any = [];
        contentType.forEach(contentTypeName => {
          allPromises.push(
            Promise.resolve(
              client.getEntries({ content_type: contentTypeName, limit, skip, order }),
            ),
          );
        });

        Promise.allSettled(allPromises)
          .then(results => setContentfulData(results))
          .catch(error => console.log(error))
          .finally(() => {
            setLoading(false);
          });
      }
    },
    [],
  );

  return { contentfulData, handleContentfulQuery };
};

export default useContentfulQuery;
