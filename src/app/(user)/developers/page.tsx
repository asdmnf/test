"use client";

import DeveloperCard from "@/components/Developers/DeveloperCard";
import PageWrapper from "@/components/PageWrapper";
import { useState } from "react";

// Example developers data
const developers = [
  {
    id: 1,
    name: "Tatweer Misr",
    logo: "/images/developers/slide1.jpg",
    images: [
      "/images/developers/slide1.jpg",
      "/images/developers/slide2.jpg",
      "/images/developers/slide3.jpg",
    ],
    description:
      "Established in 2014, Tatweer Misr is an Egyptian shareholding real estate company, that capitalizes on a wealth of industrial and real estate experience.",
    projectsCount: 6,
    isFavorite: false,
  },
  {
    id: 2,
    name: "LMD",
    logo: "/images/developers/slide2.jpg",
    images: [
      "/images/developers/slide1.jpg",
      "/images/developers/slide2.jpg",
      "/images/developers/slide3.jpg",
    ],
    description:
      "Landmark was founded by Engineer Ahmed Sabbour, one of the pioneers in the Egyptian real estate market.",
    projectsCount: 4,
    isFavorite: true,
  },
  {
    id: 3,
    name: "Madinat Masr",
    logo: "/images/developers/slide3.jpg",
    images: ["/images/developers/slide1.jpg", "/images/developers/slide2.jpg"],
    description:
      "Since our journey began over 60 years ago, our vision has always been to build for the future and create rich communities that grow.",
    projectsCount: 3,
    isFavorite: false,
  },
];

// Pagination settings
const itemsPerPage = 3;

const DevelopersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(developers.length / itemsPerPage);
  const paginatedDevelopers = developers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <PageWrapper>
      {/* Developers Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {paginatedDevelopers.map((developer) => (
          <DeveloperCard key={developer.id} {...developer} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`w-8 h-8 rounded-full ${
              currentPage === index + 1
                ? "bg-[var(--primary-color)] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </PageWrapper>
  );
};

export default DevelopersPage;
