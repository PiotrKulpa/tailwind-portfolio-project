import { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import { ContentfulQueryParams } from '@/global-types';

const useContentfulQuery = ({ contentfulCredential, contentType, limit = 100, skip = 0, order}: ContentfulQueryParams): {items?: any[]} => {

  const[contentfulData, setContentfulData] = useState({});

  const client = createClient({
    space: contentfulCredential.spaceId,
    accessToken: contentfulCredential.accessToken,
  });

  useEffect(() => {
    client.getEntries({content_type: contentType, limit, skip, order }) 
    .then((response) => {
      if(response) {
        setContentfulData(response)
      }
    })
    .catch((error) => console.log(error)) 
  }, [])

  return contentfulData;
}

export default useContentfulQuery;