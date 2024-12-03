import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const ImageCarousel: React.FC<{ images: string[], height: string }> = ({
  images,
  height,
}): JSX.Element => {
  return (
    <Swiper
      pagination={{
        clickable: true,
        renderBullet: (index, className) =>
          `<span class="${className} bg-gray-200 dark:bg-gray-700 w-4 h-4 rounded-full"></span>`,
      }}
      modules={[Pagination]}
      loop={true}
      className={`w-full ${height}`}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={image}
            alt={`Carousel image ${index + 1}`}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
