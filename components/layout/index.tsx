import React from 'react'
import Nav from '../nav'
import Footer from '../footer'
import { ChildrenProps } from '../../global-types'

const Layout = ({children}: ChildrenProps) => {
  return (
    <>
    <Nav />
    <div className="mt-12">{children}</div>
    <Footer />
    </>
  )
}

export default Layout