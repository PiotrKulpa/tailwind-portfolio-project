import Nav from '../nav';
import Footer from '../footer';
import Loader from '../loader';
import { ChildrenProps } from '../../global-types';

const Layout = ({ children }: ChildrenProps) => {
  return (
    <div className="overflow-x-hidden">
      {/* <Loader /> */}
      <Nav />
      <div className="mt-40">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
