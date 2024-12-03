"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import DeveloperCard from "./DeveloperCard";

type Developer = {
  id: number;
  name: string;
  logo: string;
  images: string[];
  description: string;
  projectsCount: number;
  isFavorite: boolean;
};

const DevelopersWrapper = ({ developers }: { developers: Developer[] }) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      navigation
      spaceBetween={5}
      loop={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 4,
        },
      }}
    >
      {developers.map((developer) => (
        <SwiperSlide key={developer.id}>
          <DeveloperCard key={developer.id} {...developer} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DevelopersWrapper;
