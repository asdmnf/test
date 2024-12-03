"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import { FiCamera } from "react-icons/fi";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import { Counter, Zoom } from "yet-another-react-lightbox/plugins";
import dynamic from "next/dynamic";

interface PageCoverProps {
  logo: string;
  images: string[];
  isFavorite: boolean;
  onFavoriteToggle?: () => void;
}

const DynamicLightbox = dynamic(() => import("yet-another-react-lightbox"), {
  ssr: false,
});

const PageCover: React.FC<PageCoverProps> = ({ logo, images, isFavorite }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <div className="relative w-full">
      {/* Cover Section */}
      <div className="w-full h-72 lg:h-96 overflow-hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            renderBullet: (index, className) =>
              `<span class="${className} bg-gray-200 dark:bg-gray-700 w-4 h-4 rounded-full"></span>`,
          }}
          loop
          className="w-full h-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                alt={`Cover Image ${index + 1}`}
                width={1920}
                height={720}
                className="w-full h-full object-cover"
                sizes="100vw"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Logo Section */}
      <div className="absolute bottom-5 left-5 flex items-center z-10">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gray-200 dark:border-[#b39550] shadow-lg">
          <Image
            src={logo}
            alt="Logo"
            width={256}
            height={256}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Favorite Button */}
      <div className="absolute top-5 right-5 z-10">
        <FavoriteButton isFavorite={isFavorite} />
      </div>

      {/* Gallery Button */}
      <button
        onClick={() => setIsLightboxOpen(true)}
        className="absolute bottom-5 right-5 bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg hover:bg-gray-800 z-10"
      >
        <FiCamera className="text-lg" />
        <span>{images.length}</span>
      </button>

      {/* Lightbox for Gallery */}
      {isLightboxOpen && (
        <DynamicLightbox
          open={isLightboxOpen}
          close={() => setIsLightboxOpen(false)}
          slides={images.map((image) => ({ src: image }))}
          plugins={[Counter, Zoom]}
          counter={{ container: { style: { top: 0 } } }}
          zoom={{
            maxZoomPixelRatio: 5,
            zoomInMultiplier: 1.5,
            doubleTapDelay: 300,
            doubleClickDelay: 300,
            doubleClickMaxStops: 3,
            keyboardMoveDistance: 10,
            wheelZoomDistanceFactor: 0.5,
            pinchZoomDistanceFactor: 0.5,
            scrollToZoom: true,
          }}
        />
      )}
    </div>
  );
};

export default PageCover;

// "use client";

// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import Image from "next/image";
// import FavoriteButton from "./FavoriteButton";
// import { FiCamera } from "react-icons/fi";
// import Lightbox from "react-image-lightbox";
// import "react-image-lightbox/style.css";
// import dynamic from "next/dynamic";

// const DynamicLightbox = dynamic(() => import("react-image-lightbox"), {
//   ssr: false,
// });

// interface PageCoverProps {
//   logo: string;
//   images: string[];
//   isFavorite: boolean;
//   onFavoriteToggle?: () => void;
// }

// const PageCover: React.FC<PageCoverProps> = ({ logo, images, isFavorite }) => {
//   const [isLightboxOpen, setIsLightboxOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   return (
//     <div className="relative w-full">
//       {/* Cover Section */}
//       <div className="w-full h-72 lg:h-96 overflow-hidden">
//         <Swiper
//           modules={[Pagination, Autoplay]}
//           autoplay={{ delay: 5000, disableOnInteraction: false }}
//           pagination={{
//             clickable: true,
//             dynamicBullets: true,
//             renderBullet: (index, className) =>
//               `<span class="${className} bg-gray-200 dark:bg-gray-700 w-4 h-4 rounded-full"></span>`,
//           }}
//           loop
//           className="w-full h-full"
//         >
//           {images.map((image, index) => (
//             <SwiperSlide key={index}>
//               <Image
//                 src={image}
//                 alt={`Cover Image ${index + 1}`}
//                 width={1920}
//                 height={720}
//                 className="w-full h-full object-cover"
//                 sizes="100vw"
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Logo Section */}
//       <div className="absolute bottom-5 left-5 flex items-center z-10">
//         <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gray-200 dark:border-[#b39550] shadow-lg">
//           <Image
//             src={logo}
//             alt="Logo"
//             width={256}
//             height={256}
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>

//       {/* Favorite Button */}
//       <div className="absolute top-5 right-5 z-10">
//         <FavoriteButton isFavorite={isFavorite} />
//       </div>

//       {/* Gallery Button */}
//       <button
//         onClick={() => setIsLightboxOpen(true)}
//         className="absolute bottom-5 right-5 bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg hover:bg-gray-800 z-10"
//       >
//         <FiCamera className="text-lg" />
//         <span>{images.length}</span>
//       </button>

//       {/* Lightbox for Gallery */}
//       {isLightboxOpen && (
//         <DynamicLightbox
//           mainSrc={images[currentIndex]}
//           nextSrc={images[(currentIndex + 1) % images.length]}
//           prevSrc={images[(currentIndex + images.length - 1) % images.length]}
//           onCloseRequest={() => setIsLightboxOpen(false)}
//           onMoveNextRequest={() =>
//             setCurrentIndex((currentIndex + 1) % images.length)
//           }
//           onMovePrevRequest={() =>
//             setCurrentIndex((currentIndex + images.length - 1) % images.length)
//           }
//         />
//       )}
//     </div>
//   );
// };

// export default PageCover;

// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import Image from "next/image";
// import FavoriteButton from "./FavoriteButton";

// interface PageCoverProps {
//   logo: string;
//   images: string[];
//   isFavorite: boolean;
//   onFavoriteToggle?: () => void;
// }

// const PageCover: React.FC<PageCoverProps> = ({ logo, images, isFavorite }) => {
//   return (
//     <div className="relative w-full">
//       {/* Cover Section */}
//       <div className="w-full h-72 lg:h-96 overflow-hidden">
//         <Swiper
//           modules={[Pagination, Autoplay]}
//           autoplay={{ delay: 5000, disableOnInteraction: false }}
//           pagination={{
//             clickable: true,
//             dynamicBullets: true,

//             renderBullet: (index, className) =>
//               `<span class="${className} bg-gray-200 dark:bg-gray-700 w-4 h-4 rounded-full"></span>`,
//           }}
//           loop
//           className="w-full h-full"
//         >
//           {images.map((image, index) => (
//             <SwiperSlide key={index}>
//               <Image
//                 src={image}
//                 alt={`Cover Image ${index + 1}`}
//                 width={1920}
//                 height={720}
//                 className="w-full h-full object-cover"
//                 sizes="100vw"
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Logo Section */}
//       <div className="absolute bottom-5 left-5 flex items-center z-10">
//         <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gray-200 dark:border-[#b39550] shadow-lg">
//           <Image
//             src={logo}
//             alt="Logo"
//             width={256}
//             height={256}
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//       <FavoriteButton isFavorite={isFavorite} />
//     </div>
//   );
// };

// export default PageCover;
