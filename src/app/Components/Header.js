import React from 'react'
import head from "@/app/Styles/Header.module.css"
import style from "@/app/Styles/Common.module.css"
import Image from 'next/image'
import Navbar from './Navbar'

const Header = () => {
  return (
    <>
        
            {/* <header>
                <nav className={head.nav}>
                    <div className={head.logo}>
                        <Image src="/logo.jpg"
                        alt="logo"
                        height={100}
                        width={170}
                        />
                    </div>
                    <Navbar/>
                </nav>
            </header> */}

            <Navbar/>
      
    </>
  )
}

export default Header
