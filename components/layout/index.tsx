import Nav from '../nav'
import Footer from '../footer'
import Loader from '../loader'
import { ChildrenProps } from '../../global-types'

const Layout = ({children}: ChildrenProps) => {
  return (
    <>
    {/* <Loader /> */}
    <Nav />
    <div className="mt-40">{children}</div>
    <Footer />
    </>
  )
}

export default Layout