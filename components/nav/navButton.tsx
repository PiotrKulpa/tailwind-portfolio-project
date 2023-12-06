import React from 'react'
import { ChildrenProps } from '../../global-types'

function NavButton({ children }: ChildrenProps) {
  return (
    <li className="flex justify-center items-center">{children}</li>
  )
}

export default NavButton