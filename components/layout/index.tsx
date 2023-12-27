import { useState } from 'react';

import { PageType } from '@/global-types';
import usePageCheck from '@/hooks/usePageCheck';
import { AppContext } from '@/utils';

import { ChildrenProps } from '../../global-types';
import Footer from '../footer';
import Loader from '../loader';
import Nav from '../nav';

const Layout = ({ children }: ChildrenProps) => {
  const [loading, setLoading] = useState(false);
  const isContactPage = usePageCheck(PageType.Contact);

  return (
    <div
      className={`overflow-x-hidden ${loading ? '' : 'animate-fadeInPage'} ${
        isContactPage ? 'bg-secondary text-primary' : 'bg-primary text-secondary'
      }`}
    >
      <AppContext.Provider value={{ loading, setLoading }}>
        {loading && <Loader />}
        <Nav />
        <div className="mt-40">{children}</div>
        <Footer />
      </AppContext.Provider>
    </div>
  );
};

export default Layout;
