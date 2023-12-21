import { ReactNode } from 'react';
import { Image } from 'react-grid-gallery';
import { OrderFilterPaths, EntrySys } from 'contentful';

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

export enum OrderType {
  CreatedAt = 'sys.createdAt',
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
  limit: number;
  skip: number;
  order?: (OrderFilterPaths<EntrySys, "sys"> | "sys.contentType.sys.id" | "-sys.contentType.sys.id")[];
}

export enum PageType {
  Home = '/',
  Contact = '/contact',
}