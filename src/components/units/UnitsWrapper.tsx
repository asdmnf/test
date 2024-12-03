"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import UnitCard from "./UnitCard";

type Unit = {
  id: number;
  images: string[];
  status: string;
  price: string;
  type: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  developer: string;
  district: string;
  isFavorite: boolean;
  project: string;
};

const UnitsWrapper = ({ units }: { units: Unit[] }) => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={5}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
        1440: {
          slidesPerView: 3,
        },
        1920: {
          slidesPerView: 4,
        },
      }}
    >
      {units.map((unit) => (
        <SwiperSlide key={unit.id}>
          <UnitCard {...unit} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default UnitsWrapper;
