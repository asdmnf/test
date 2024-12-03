"use client";

import DistrictCard from "@/components/Districts/DistrictCard";
import { useState } from "react";

const DistrictsPage = () => {
  const districts = [
    {
      id: 1,
      name: "New Cairo",
      image: "/images/developers/slide1.jpg",
      isFavorite: true,
    },
    {
      id: 2,
      name: "Mostakbal City",
      image: "/images/developers/slide2.jpg",
      isFavorite: false,
    },
    {
      id: 3,
      name: "El Shorouk",
      image: "/images/developers/slide3.jpg",
      isFavorite: true,
    },
    {
      id: 4,
      name: "New Capital",
      image: "/images/developers/slide1.jpg",
      isFavorite: false,
    },
  ];

  // Pagination settings
  const itemsPerPage = 3;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(districts.length / itemsPerPage);
  const paginatedDistricts = districts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* districts Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {paginatedDistricts.map((district) => (
          <DistrictCard key={district.name} {...district} />
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
    </div>
  );
};

export default DistrictsPage;
