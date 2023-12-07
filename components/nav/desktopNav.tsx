import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import NavButton  from './navButton'

import { menuElements } from '@/utils'

const DesktopNav = () => {
  const router = useRouter()
  const isHomePage = router.pathname === '/'
  
  return (
    <ul className={`hidden sticky z-10 w-screen sm:hidden h-30 lg:flex justify-center items-center font-primary text-base uppercase ${isHomePage ? 'text-primary' : 'text-secondary'}`}>
      {menuElements.map((element, index) => {
        return element.isGraphic ? 
        <div key={index}className="flex justify-center items-center w-20 h-20 m-10 rounded-full border-slate-400 border-2"><NavButton><Link href={element.href}><span className="p-5">P</span></Link></NavButton></div> : 
        <NavButton key={index}>
          <Link href={element.href}>
              <span 
                className={`block m-4 after:block after:transition-all after:w-0 after:m-auto after:border-b-2 after:border-transparent hover:after:border-b-2 hover:after:w-full ${isHomePage ? 'hover:after:border-primary' : 'hover:after:border-secondary'}  hover:after:transition-all`}>
                {element.name}
              </span>
          </Link>
        </NavButton>
      })}
    </ul>
  )
}

export default DesktopNav
