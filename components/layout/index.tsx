import { useState } from 'react';

import Nav from '../nav';
import Footer from '../footer';
import Loader from '../loader';
import { ChildrenProps } from '../../global-types';
import { AppContext } from '@/utils';

const Layout = ({ children }: ChildrenProps) => {
  const [loading, setLoading] = useState(false);

  // TODO:detect if contact page

  return (
    <div className="overflow-x-hidden">
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
