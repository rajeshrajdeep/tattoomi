// components/navigation/Navbar.tsx

import Image from "next/image"
import Link from "next/link"
import { FaFacebookSquare } from "react-icons/fa"
import { SlSocialInstagram } from "react-icons/sl"
import { VscTwitter } from "react-icons/vsc"
import { MobileNav } from "./MobileNav"

const socialLinks = [
  { href: "https://www.instagram.com/tattoomistudio/", label: "Instagram", Icon: SlSocialInstagram },
  { href: "https://www.facebook.com/tattoomistudio", label: "Facebook", Icon: FaFacebookSquare },
  { href: "https://x.com/tattoomistudio", label: "Twitter", Icon: VscTwitter },
]

const linkStyles = "hover:text-rose-600 transition-all ease-in duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-600 rounded-sm"

export const Navbar = () => {
  return (
    <header className="relative z-50 p-0 m-0">
      <nav
        aria-label="Main navigation"
        className="hidden sm:flex sticky top-0 z-50 justify-between items-center max-w-7xl mx-auto py-5 bg-background"
      >
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

        <ul className="flex space-x-8">
          <li><a href="#about" className={linkStyles}>about us</a></li>
          <li><a href="#portfolio" className={linkStyles}>portfolio</a></li>
          <li><a href="#team" className={linkStyles}>team</a></li>
          <li><a href="#contact" className={linkStyles}>contact</a></li>
          <li><Link href="/blog" className={linkStyles}>blog</Link></li>
          <li className="relative">
            <details>
              <summary className={`${linkStyles} list-none cursor-pointer`}>features</summary>
              <ul className="absolute mt-2 bg-background flex-row space-y-2 p-5 rounded-lg shadow-lg">
                <li><Link href="/process" className={linkStyles}>process</Link></li>
                <li><Link href="/comingsoon" className={linkStyles}>coming soon</Link></li>
                <li><Link href="/offers" className={linkStyles}>offers</Link></li>
              </ul>
            </details>
          </li>
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
      <MobileNav />
    </header>
  )
}