import { ReactNode } from 'react'
import { Image } from 'react-grid-gallery'

export interface ChildrenProps {
  children?: ReactNode
}

export interface CustomImage extends Image {
  original: string;
}