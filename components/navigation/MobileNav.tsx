// components/navigation/MobileNav.tsx
"use client";
import { useState } from 'react'
import { GiTireIronCross } from 'react-icons/gi'


export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSideNav = () => {
    setIsOpen(true);
  }

  const closeSideNav = () => {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={openSideNav} className={`sm:hidden absolute right-0 p-4 text-3xl transition-transform duration-150 ease-in-out ${isOpen ? 'rotate-90 scalingAnimation' : 'rotate-45'}`}>
        <GiTireIronCross />
      </button>

      {isOpen && (
        <>
          <nav className='sm:hidden flex'>
            Mobile nav
          </nav>
        </>
      )}
    </>
  )
}