import { FC } from 'react';

import Resume from './resume';
import Skills from './skills';
import Testimonials from './testimonials';
import Services from './services';
import { ContentfulCredentialProps } from '@/global-types';

const About: FC<ContentfulCredentialProps> = ({ contentfulCredential }) => {
  return (
    <>
      <Resume />
      <Skills contentfulCredential={contentfulCredential} />
      <Testimonials />
      <Services />
    </>
  );
};

export default About;
