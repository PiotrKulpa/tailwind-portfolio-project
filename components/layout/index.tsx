import { useState } from 'react';

import Nav from '../nav';
import Footer from '../footer';
import Loader from '../loader';
import { ChildrenProps } from '../../global-types';
import { AppContext } from '@/utils';
import usePageCheck from '@/hooks/usePageCheck';
import { PageType } from '@/global-types';

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
