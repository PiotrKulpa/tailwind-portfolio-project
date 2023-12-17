import { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import { ContentfulQueryParams } from '@/global-types';

const useContentfulQuery = ({ contentfulCredential, contentType }: ContentfulQueryParams) => {

  const[contentfulData, setContentfulData] = useState({});

  const client = createClient({
    space: contentfulCredential.spaceId,
    accessToken: contentfulCredential.accessToken,
  });

  useEffect(() => {
    client.getEntries({content_type: contentType})
    .then((response) => {
      if(response) {
        setContentfulData(response.items)
      }
    
    })
    .catch((error) => console.log(error))

    
  }, [])

  return contentfulData;
}

export default useContentfulQuery;