import React from 'react'
import ban from '@/app/Styles/Bannner.module.css'
import Image from 'next/image'

const Banner = ({title,Urlimage}) => {
    return (
        <>
            <div className={ban.net}>
            <Image src={Urlimage}
                        height={450}
                        width={620}
                        alt="Banner Image"
                    />
                <div className={ban.net1}>
                    <h1>{title}</h1>
                    <p>Welcome to Elite Home Creation, where design meets innovation!<br/> We are a premier interior design studio dedicated to transforming spaces<br/> into breathtaking works of art. Whether you're seeking a cozy home makeover,<br/> a modern office revamp, or luxurious commercial interiors, our expert designers<br/> craft tailored solutions to suit your taste and needs. Explore our portfolio to witness<br/> our commitment to aesthetics, functionality, and timeless style. With attention<br/> to detail and a passion for excellence, we bring your vision to life. Let us<br/> redefine your space and elevate your lifestyle. Contact us today to <br/>begin your journey to inspired interiors!
</p>
                </div>
            </div>
        </>
    )
}

export default Banner