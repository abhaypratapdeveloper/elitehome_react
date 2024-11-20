import React from 'react'
import head from "@/app/Styles/Header.module.css"
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <div className={head.list}>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/portfolio">Portfolio</Link></li>
                    <li><Link href="/pricing">Pricing</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <input type="Search..." placeholder="Search..."/>
                </ul>
        </div>
    </>
  )
}

export default Navbar
