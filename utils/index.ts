import React from 'react';

import { CustomImage } from '@/global-types';

export const AppContext = React.createContext({} as any);

export const menuElements = [
  {name: 'About Me', href: '/about', isGraphic: false},
  {name: 'Work', href: '/work', isGraphic: false},
  {name: 'P', href: '/', isGraphic: true},
  {name: 'Blog', href: '/blog', isGraphic: false},
  {name: 'Contact', href: '/contact', isGraphic: false},
];

export const months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
