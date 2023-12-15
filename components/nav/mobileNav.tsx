import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import NavButton  from './navButton'
import Hamburger from './hamburger'

import { menuElements } from '@/utils'

const MobilepNav = () => {
  const router = useRouter()
  const isHomePage = router.pathname === '/'
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className={`w-full ${isHomePage ? 'bg-transparent' : 'bg-primary'} sm:block lg:hidden ${isHomePage ? 'absolute' : 'fixed'} top-0 left-0 z-20 ${isHomePage ? 'text-primary': 'text-secondary'}`} >
      <div className='container mx-auto'>
        <div className="flex justify-between items-center my-5">
          <div> <Link href="/"><p className="font-primary text-3xl">P</p></Link></div>
       
        <div><Hamburger setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}/></div>
        
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={1.5}  className=" m-10 w-16 h-16 absolute right-0 z-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div className="absolute left-0 top-0 bg-secondary/75 h-screen w-screen flex justify-center items-center animate-fadeIn">
          <ul className={`h-30 flex-column justify-center items-center text-3xl font-secondary font-medium text-primary`}>
          {menuElements.filter((element) => element.isGraphic === false).map((element, index) => {
            return  <NavButton key={index}><Link href={element.href}><span className="block  m-4 ">{element.name}</span></Link></NavButton>
          })}
          </ul>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default MobilepNav
