import React from 'react'
import Nav from '../nav'
import { ChildrenProps } from '../../global-types'

const Layout = ({children}: ChildrenProps) => {
  return (
    <>
    <Nav />
    <div>{children}</div>
    </>
  )
}

export default Layout