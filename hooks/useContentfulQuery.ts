import { useEffect, useState, useContext } from 'react';
import { createClient } from 'contentful';

import { ContentfulQueryParams } from '@/global-types';
import { AppContext } from '@/utils';

const useContentfulQuery = ({ entryId, contentfulCredential, contentType, limit = 100, skip = 0, order}: ContentfulQueryParams): {items?: any[]} => {

  const[contentfulData, setContentfulData] = useState({});
  const { setLoading } = useContext(AppContext);

  const client = createClient({
    space: contentfulCredential.spaceId,
    accessToken: contentfulCredential.accessToken,
  });

  useEffect(() => {
    setLoading(true);

   
    
    if(entryId) {
      console.log('ENTRY ID', entryId);
      client.getEntry(entryId) 
      .then((response) => {
        if(response) {
          setContentfulData(response)
        }
      })
      .catch((error) => console.log(error))
      .finally( () => {
        setLoading(false);
      });
    } else {
      client.getEntries({content_type: contentType, limit, skip, order }) 
    .then((response) => {
      if(response) {
        setContentfulData(response)
      }
    })
    .catch((error) => console.log(error))
    .finally( () => {
      setLoading(false);
    });
    }
    
  }, [])

  return contentfulData;
}

export default useContentfulQuery;