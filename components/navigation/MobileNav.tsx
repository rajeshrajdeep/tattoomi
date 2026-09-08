// components/navigation/MobileNav.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react'
import { GiTireIronCross } from 'react-icons/gi'
import { FaFacebookSquare } from "react-icons/fa"
import { SlSocialInstagram } from "react-icons/sl"
import { VscTwitter } from "react-icons/vsc"

const socialLinks = [
  { href: "https://www.instagram.com/tattoomistudio/", label: "Instagram", Icon: SlSocialInstagram },
  { href: "https://www.facebook.com/tattoomistudio", label: "Facebook", Icon: FaFacebookSquare },
  { href: "https://x.com/tattoomistudio", label: "Twitter", Icon: VscTwitter },
]

const linkStyles = "hover:text-rose-600 transition-all ease-in duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-600 rounded-sm"

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSideNav = () => {
    setIsOpen((prev) => !prev);
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <header className='fixed top-0 z-50 w-svw flex justify-between items-center bg-transparent px-4 sm:hidden'>
        <Link href="/" aria-label="TATTOOMI Home">
          <Image
            width={75}
            height={75}
            src="/navlogo.png"
            alt="TATTOOMI Tattoo Studio Logo"
            priority
            className="m-0 p-0"
          />
        </Link>
        <button
          onClick={openSideNav}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className={`text-3xl transition-transform duration-150 ease-in-out ${isOpen ? 'rotate-90 scalingAnimation' : 'rotate-45 scalingAnimationReverse'}`}
        >
          <GiTireIronCross />
        </button>
      </header>

      <nav
        className={`sm:hidden fixed inset-0 z-40 flex flex-col py-5 justify-around items-center w-svw h-svh bg-black transition-transform ease-out duration-300 delay-100 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <ul className="flex flex-col space-y-8 text-center">
          <li><Link href="#about" className={linkStyles}>about us</Link></li>
          <li><Link href="#portfolio" className={linkStyles}>portfolio</Link></li>
          <li><Link href="#team" className={linkStyles}>team</Link></li>
          <li><Link href="#contact" className={linkStyles}>contact</Link></li>
          <li><Link href="/blog" className={linkStyles}>blog</Link></li>
          <li><Link href="/process" className={linkStyles}>process</Link></li>
          <li><Link href="/comingsoon" className={linkStyles}>coming soon</Link></li>
          <li><Link href="/offers" className={linkStyles}>offers</Link></li>
        </ul>

        <ul className="flex space-x-5 pr-6">
          {socialLinks.map(({ href, label, Icon }) => (
            <li key={label}>
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`${linkStyles} text-2xl`}
              >
                <Icon />
              </Link>
            </li>
          ))}
        </ul>

      </nav>
    </>
  )
}