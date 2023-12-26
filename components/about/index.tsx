import { FC } from 'react';

import { ContentfulCredentialProps } from '@/global-types';

import Resume from './resume';
import Services from './services';
import Skills from './skills';
import Testimonials from './testimonials';

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
