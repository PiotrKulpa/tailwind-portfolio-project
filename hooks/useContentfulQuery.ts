import { createClient } from 'contentful';
import { useContext, useEffect, useState } from 'react';

import { ContentfulQueryParams } from '@/global-types';
import { AppContext } from '@/utils';

// TODO: fix types
const useContentfulQuery = ({
  entryId,
  contentfulCredential,
  contentType,
  limit = 100,
  skip = 0,
  order,
}: ContentfulQueryParams): { sys?: any; fields?: any; items?: any[] } => {
  const [contentfulData, setContentfulData] = useState({});
  const { setLoading } = useContext(AppContext);

  const client = createClient({
    space: contentfulCredential.spaceId,
    accessToken: contentfulCredential.accessToken,
  });

  useEffect(() => {
    setLoading(true);
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
    } else {
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
  }, []);

  return contentfulData;
};

export default useContentfulQuery;
