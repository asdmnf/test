"use client";

import Image from "next/image";
import Link from "next/link";
import ImageCarousel from "../ImageCarousel";
import FavoriteButton from "../FavoriteButton";
// import CONSTANTS from "@/utils/constants";

interface Developer {
  id: number;
  name: string;
  logo: string;
  images: string[];
  description: string;
  projectsCount?: number;
  isFavorite: boolean;
  // onFavoriteToggle: (id: number) => void;
}

const DeveloperCard: React.FC<Developer> = ({
  id,
  name,
  logo,
  images,
  description,
  projectsCount,
  isFavorite,
  // onFavoriteToggle,
}): JSX.Element => {
  console.log(id, 'id');
  return (
    <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden hover:bg-gray-50 dark:hover:bg-gray-600">
      {/* Carousel */}
      <ImageCarousel images={images} height="h-48" />

      {/* Card Content */}
      <div className="p-4 relative">
        {/* Favorite Button */}
        <FavoriteButton
          isFavorite={isFavorite}
          // onToggle={() => onFavoriteToggle(id)}
        />

        {/* Developer Info */}
        <div className="flex items-center mb-4">
          <Image
            src={logo}
            alt={name}
            width={200}
            height={200}
            className="w-20 h-8 rounded-xl mr-2"
          />
          <Link
            href={`/specific-developer`}
            as={`/specific-developer`}
            className="text-lg font-bold text-gray-900 dark:text-gray-100 hover:underline"
          >
            {name}
          </Link>
        </div>

        {/* Developer Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 min-h-[4rem]">
          {description}
        </p>

        {/* Projects Count and Button */}
        <div className="flex justify-between items-center">
          {projectsCount !== undefined && (
            <span className="text-[var(--primary-color)] dark:text-blue-400 font-bold">
              {projectsCount} Projects
            </span>
          )}
          <Link
            href={`/specific-developer`}
            as={`/specific-developer`}
            className="px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition duration-200 dark:bg-blue-400 dark:hover:bg-blue-500"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard;
