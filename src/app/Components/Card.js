import React from 'react'
import Image from 'next/image'
import car from '@/app/Styles/Card.module.css'

const Card = ({text,image}) => {
  return (
    <>
      <div className={car.cd}>
        <Image src={image}
        width={250}
        height={250}
        alt="Decor images"
        />
        <h1>{text}</h1>
      </div>
    </>
  )
}

export default Card
