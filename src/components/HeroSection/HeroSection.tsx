"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SocialIcons from "./SocialIcons";
import Image from "next/image";

const HeroSection = () => {
  const images = [
    "images/hero-slides/slide1.jpg",
    "images/hero-slides/slide2.jpg",
    "images/hero-slides/slide3.jpg",
  ];

  return (
    <section className="relative h-[calc(100vh-var(--header-height))] w-full">
      {/* Swiper for slides */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          renderBullet: (index, className) =>
            `<span class="${className} bg-gray-200 dark:bg-gray-700 w-4 h-4 rounded-full"></span>`,
        }}
        loop={true}
        className="h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              alt="slide"
              src={image}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Social Icons Container */}
      <SocialIcons />
    </section>
  );
};

export default HeroSection;
