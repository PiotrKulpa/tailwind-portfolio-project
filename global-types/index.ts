import { ReactNode } from 'react';
import { Image } from 'react-grid-gallery';

export interface ChildrenProps {
  children?: ReactNode
}

export interface CustomImage extends Image {
  original: string;
}

export interface HamburgerProps {
  setIsMenuOpen: (isMenuOpen: boolean) => void;
   isMenuOpen: boolean;
}

export enum ContentType {
  Blog = 'blog',
  Employment = 'employment',
  Work = 'work',
  Trainings = 'trainings',
}

interface ContentfulCredential {
  spaceId: string;
  accessToken: string;
}

export interface ContentfulCredentialProps {
  contentfulCredential: ContentfulCredential;
}

export interface ContentfulQueryParams {
  contentfulCredential: ContentfulCredential;
  contentType: string;
}