// components/navigation/Navbar.tsx

import Image from "next/image"

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center max-w-full p-5 bg-background ">
        <Image width={75} height={75} src="/navlogo.png" alt="TATTOOMI Logo" className="m-0 p-0" />

        <ul className="flex space-x-4">
            <li><a href="#about">about us</a></li>
            <li><a href="#portfolio">portfolio</a></li>
            <li><a href="#team">team</a></li>
            <li><a href="#contact">contact</a></li>
            <li><a href="#blog">blog</a></li>
            <li><a href="#offers">features</a></li>
        </ul>
        <div>1</div>
    </nav>
  )
}
