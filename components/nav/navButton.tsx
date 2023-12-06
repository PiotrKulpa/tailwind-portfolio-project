import React from 'react'
import { Props } from './types'

function NavButton({children}: Props) {
  return (
    <li className="flex justify-center items-center">{children}</li>
  )
}

export default NavButton