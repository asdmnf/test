import Link from "next/link";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBuilding,
  FaUser,
} from "react-icons/fa";
import ImageCarousel from "../ImageCarousel";
import FavoriteButton from "../FavoriteButton";

interface UnitCardProps {
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
  isFavorite: boolean;
  project: string;
}

const UnitCard: React.FC<UnitCardProps> = ({
  id,
  images,
  status,
  price,
  type,
  location,
  bedrooms,
  bathrooms,
  area,
  developer,
  isFavorite,
  project,
}) => {
  console.log(id);
  return (
    <div className="flex flex-col bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden hover:bg-gray-50 dark:hover:bg-gray-600">
      {/* Image Section */}
      <div className="relative">
        {/* Carousel */}
        <ImageCarousel images={images} height="h-64" />
        <span className="absolute top-3 left-3 bg-[var(--primary-color)] text-white text-sm px-3 py-1 rounded z-10">
          {status}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-4">
        <div className="relative">
          <Link href={`/specific-unit`} as={`/specific-unit`}>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              {type}
            </h3>
          </Link>
          <FavoriteButton
            iconPosition="top-1 right-1"
            isFavorite={isFavorite}
            // onToggle={() => onFavoriteToggle(id)}
          />
        </div>

        <p className="mb-4 text-gray-500 dark:text-gray-400">
          From:{" "}
          <span className="text-[var(--primary-color)] dark:text-[#b39527] text-lg font-bold">
            {price}
          </span>
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {bedrooms} bed | {bathrooms} bath | {area} sqm
        </p>

        <p className="text-sm mb-4 text-gray-600 dark:text-gray-300 flex items-center">
          <Link
            href={`/specific-developer`}
            as={`/specific-developer`}
            className="text-[var(--primary-color)] dark:text-[#b39527] font-semibold flex items-center hover:underline"
          >
            <FaUser className="inline-block mr-1 text-blue-500" />
            {developer}
          </Link>
          <span className="mx-2">|</span>
          <Link
            href={`/specific-project`}
            as={`/specific-project`}
            className="text-[var(--primary-color)] dark:text-[#b39527] font-semibold flex items-center hover:underline"
          >
            <FaBuilding className="inline-block mr-1 text-blue-500" />
            {project}
          </Link>
        </p>

        <Link
          href={`/specific-district`}
          as={`/specific-district`}
          className="text-[var(--primary-color)] dark:text-[#b39527] font-semibold flex items-center mb-4 hover:underline"
        >
          <FaMapMarkerAlt className="inline-block mr-1 text-blue-500" />
          {location}
        </Link>

        <div className="flex justify-end gap-2">
          <button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600">
            <FaWhatsapp />
          </button>
          <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600">
            <FaPhoneAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnitCard;
