import { CustomImage } from '@/global-types'

interface ExtendedCustomImage extends CustomImage {
  title?: string;
}

export const menuElements = [
  {name: 'About Me', href: '/about', isGraphic: false},
  {name: 'Work', href: '/work', isGraphic: false},
  {name: 'P', href: '/', isGraphic: true},
  {name: 'Blog', href: '/blog', isGraphic: false},
  {name: 'Contact', href: '/contact', isGraphic: false},
]

export const imgWorkPath = './img/work/'

export const workImages: ExtendedCustomImage[] = [
  {
    src: `${imgWorkPath}ploom-desktop-home.jpg`,
    original: `${imgWorkPath}ploom-desktop-home.jpg`,
    width: 2544,
    height: 1147,
    title: 'Ploom',
    caption: 'Ploom e-commerce Home page. Technology: Next.js, React, Graphql',
  },
  {
    src: `${imgWorkPath}ploom-info-page.jpg`,
    original: `${imgWorkPath}ploom-info-page.jpg`,
    width: 1320,
    height: 1001,
    title: 'Ploom',
    caption: 'Ploom e-commerce Info page. Technology: Next.js, React, Graphql',
  },
  {
    src: `${imgWorkPath}ploom-mobile-home.jpg`,
    original: `${imgWorkPath}ploom-mobile-home.jpg`,
    width: 375,
    height: 667,
    title: 'Ploom',
    caption: 'Ploom e-commerce mobile Info page. Technology: Next.js, React, Graphql',
  },
  {
    src: `${imgWorkPath}ploom-product-details-page.jpg`,
    original: `${imgWorkPath}ploom-product-details-page.jpg`,
    width: 1285,
    height: 1629,
    title: 'Ploom',
    caption: 'Ploom e-commerce product details page. Technology: Next.js, React, Graphql',
  },
  {
    src: `${imgWorkPath}ploom-mobile-nav.jpg`,
    original: `${imgWorkPath}ploom-mobile-nav.jpg`,
    width: 375,
    height: 667,
    title: 'Ploom',
    caption: 'Ploom e-commerce mobile nav. Technology: Next.js, React, Graphql',
  },
  {
    src: `${imgWorkPath}converse-home.jpg`,
    original: `${imgWorkPath}converse-home.jpg`,
    width: 1457,
    height: 2015,
    title: 'Converse',
    caption: 'Converse e-commerce Home page. Technology: Next.js, React, Graphql',
  },
  {
    src: `${imgWorkPath}converse-pl-cart-mobile.jpg`,
    original: `${imgWorkPath}converse-pl-cart-mobile.jpg`,
    width: 779,
    height: 1121,
    title: 'Converse',
    caption: 'Converse e-commerce Home page. Technology: Next.js, React, Graphql',
  },
  {
    src: `${imgWorkPath}converse-products-page.jpg`,
    original: `${imgWorkPath}converse-products-page.jpg`,
    width: 1452,
    height: 2518,
    title: 'Converse',
    caption: 'Converse e-commerce Home page. Technology: Next.js, React, Graphql',
  },
  {
    src: `${imgWorkPath}converse-register-pl.jpg`,
    original: `${imgWorkPath}converse-register-pl.jpg`,
    width: 832,
    height: 789,
    title: 'Converse',
    caption: 'Converse e-commerce Home page. Technology: Next.js, React, Graphql',
  },
  {
    src: `${imgWorkPath}historyvault-details-screen.jpg`,
    original: `${imgWorkPath}historyvault-details-screen.jpg`,
    width: 1920,
    height: 1080,
    title: 'History Vault',
    caption: 'History Vault App details screen. Technology: Next.js, React, Graphql, Vercel',
  },
  {
    src: `${imgWorkPath}historyvault-documentaries-detail-screen.jpg`,
    original: `${imgWorkPath}historyvault-documentaries-detail-screen.jpg`,
    width: 1920,
    height: 1080,
    title: 'History Vault',
    caption: 'History Vault App Documentaries detail screen. Technology: Next.js, React, Node.js, Graphql, Vercel',
  },
  {
    src: `${imgWorkPath}historyvault-documentaries-screen.jpg`,
    original: `${imgWorkPath}historyvault-documentaries-screen.jpg`,
    width: 1920,
    height: 1080,
    title: 'History Vault',
    caption: 'History Vault App Documentaries detail screen. Technology: Next.js, React, Node.js, Graphql, Vercel',
  },
  {
    src: `${imgWorkPath}historyvault-home-screen.jpg`,
    original: `${imgWorkPath}historyvault-home-screen.jpg`,
    width: 1920,
    height: 1080,
    title: 'History Vault',
    caption: 'History Vault App Home screen. Technology: Next.js, React, Node.js, Graphql, Vercel',
  },
  {
    src: `${imgWorkPath}historyvault-series-screen.jpg`,
    original: `${imgWorkPath}historyvault-home-screen.jpg`,
    width: 1920,
    height: 1080,
    title: 'History Vault',
    caption: 'History Vault App Series Home screen. Technology: Next.js, React, Node.js, Graphql, Vercel',
  },
  {
    src: `${imgWorkPath}puccini-desktop.jpg`,
    original: `${imgWorkPath}puccini-desktop.jpg`,
    width: 2018,
    height: 1265,
    title: 'Puccini',
    caption: 'Puccini Home screen. Technology: Next.js, React, Graphql',
  },
  {
    src: `${imgWorkPath}puccini-desktop-products-list.jpg`,
    original: `${imgWorkPath}puccini-desktop-products-list.jpg`,
    width: 2014,
    height: 3201,
    title: 'Puccini',
    caption: 'Puccini Products screen. Technology: Next.js, React, Graphql',
  },
  {
    src: `${imgWorkPath}puccini-mobile-menu.jpg`,
    original: `${imgWorkPath}puccini-mobile-menu.jpg`,
    width: 779,
    height: 1200,
    title: 'Puccini',
    caption: 'Puccini mobile Menu. Technology: Next.js, React, Graphql',
  },
  
];
