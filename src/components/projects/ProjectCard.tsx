"use client";

import Link from "next/link";
import ImageCarousel from "../ImageCarousel";
import FavoriteButton from "../FavoriteButton";

interface Project {
  id: number;
  logo: string;
  images: string[];
  title: string;
  isFavorite: boolean;
}

const ProjectCard: React.FC<Project> = ({ images, title, isFavorite }) => {
  return (
    <div className="text-[var(--primary-color)] dark:text-[#b39527] dark:bg-gray-700 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white rounded-lg 1 overflow-hidden shadow-md hover:shadow-lg hover:bg-gray-50">
      {/* Carousel */}
      <div className="relative">
        <ImageCarousel images={images} height="h-64" />
        <FavoriteButton isFavorite={isFavorite} />
      </div>
      <div className="p-4 text-center">
        <Link
          href={`/specific-project`}
          as={`/specific-project`}
        >
          <h3 className="text-lg font-bold mb-2">{title}</h3>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
