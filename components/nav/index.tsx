import React from 'react'
import Link from 'next/link'
import NavButton  from './navButton'

export const Nav = () => {
  return (
    <ul className="h-20 flex justify-center items-center font-primary text-xs">
      <NavButton><Link href="/about"><span className="m-4">About Me</span></Link></NavButton>
      <NavButton><Link href="/work"><span className="m-4">Work</span></Link></NavButton>
      <div className="flex justify-center items-center w-10 h-10 m-10 rounded-full border-slate-400 border-2"><NavButton><Link href="/"><span className="p-5">P</span></Link></NavButton></div>
      <NavButton><Link href="/blog"><span className="m-4">Blog</span></Link></NavButton>
      <NavButton><Link href="/contact"><span className="m-4">Contact</span></Link></NavButton>
    </ul>
  )
}
