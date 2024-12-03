"use client";

import React from 'react'; 
import ban from "@/app/Styles/Bannner.module.css"
import Image from 'next/image';

const Banner = ({ title, Urlimage }) => {
  return (
    <>
      <div className={ban.net}>
        <div className={ban.imageContainer}>
          <Image
            src={Urlimage}
            height={500}
            width={650}
            alt="Banner Image"
            className={ban.image}
          />
        </div>
        <div className={ban.net1}>
          <h1>{title}</h1>
          <p>
            Welcome to Elite Home Creation, where design meets innovation!
            <br />
            We are a premier interior design studio dedicated to transforming spaces
            into breathtaking works of art. Whether you're seeking a cozy home makeover,
            a modern office revamp, or luxurious commercial interiors, our expert designers
            craft tailored solutions to suit your taste and needs. Explore our portfolio to witness
            our commitment to aesthetics, functionality, and timeless style. With attention
            to detail and a passion for excellence, we bring your vision to life. Let us
            redefine your space and elevate your lifestyle. Contact us today to begin your journey to inspired interiors!
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
