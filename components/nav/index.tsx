import { useRouter } from 'next/router';
import React from 'react';

import DesktopNav from './desktopNav';
import MobileNav from './mobileNav';

const Nav = () => {
  const router = useRouter();
  return (
    <>
      <MobileNav />
      <DesktopNav />
    </>
  );
};

export default Nav;
