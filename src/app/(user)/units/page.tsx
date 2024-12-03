"use client";

import UnitCard from "@/components/units/UnitCard";
import { useState } from "react";

const UnitsPage = () => {
  const units = [
    {
      id: 1,
      images: [
        "/images/developers/slide1.jpg",
        "/images/developers/slide2.jpg",
        "/images/developers/slide3.jpg",
      ],
      status: "Ready To Move",
      price: "11,710,000 EGP",
      type: "Apartment - Residential",
      location: "Mostakbal City",
      bedrooms: 2,
      bathrooms: 2,
      area: 150,
      developer: "Tatweer Misr",
      district: "Ain Sokhna",
      isFavorite: false,
      project: "Mostakbal",
    },
    {
      id: 2,
      images: [
        "/images/developers/slide1.jpg",
        "/images/developers/slide2.jpg",
        "/images/developers/slide3.jpg",
      ],
      status: "Ready To Move",
      price: "28,208,000 EGP",
      type: "Twin House - Residential",
      location: "New Zayed",
      bedrooms: 3,
      bathrooms: 3,
      area: 229,
      developer: "Tatweer Misr",
      district: "Ain Sokhna",
      isFavorite: true,
      project: "Mostakbal",
    },
    {
      id: 3,
      images: [
        "/images/developers/slide1.jpg",
        "/images/developers/slide2.jpg",
        "/images/developers/slide3.jpg",
      ],
      status: "Ready To Move",
      price: "10,549,000 EGP",
      type: "Chalet - Vacation Homes",
      location: "Ain Sokhna",
      bedrooms: 3,
      bathrooms: 2,
      area: 115,
      developer: "Tatweer Misr",
      district: "Ain Sokhna",
      isFavorite: true,
      project: "Mostakbal",
    },
    {
      id: 4,
      images: [
        "/images/developers/slide1.jpg",
        "/images/developers/slide2.jpg",
        "/images/developers/slide3.jpg",
      ],
      status: "Ready To Move",
      price: "10,549,000 EGP",
      type: "Chalet - Vacation Homes",
      location: "Ain Sokhna",
      bedrooms: 3,
      bathrooms: 2,
      area: 115,
      developer: "Tatweer Misr",
      district: "Ain Sokhna",
      isFavorite: false,
      project: "Mostakbal",
    },
    {
      id: 5,
      images: [
        "/images/developers/slide1.jpg",
        "/images/developers/slide2.jpg",
        "/images/developers/slide3.jpg",
      ],
      status: "Ready To Move",
      price: "10,549,000 EGP",
      type: "Chalet - Vacation Homes",
      location: "Ain Sokhna",
      bedrooms: 3,
      bathrooms: 2,
      area: 115,
      developer: "Tatweer Misr",
      district: "Ain Sokhna",
      isFavorite: true,
      project: "Bloomfields",
    },
    {
      id: 6,
      images: [
        "/images/developers/slide1.jpg",
        "/images/developers/slide2.jpg",
        "/images/developers/slide3.jpg",
      ],
      status: "Ready To Move",
      price: "10,549,000 EGP",
      type: "Chalet - Vacation Homes",
      location: "Ain Sokhna",
      bedrooms: 3,
      bathrooms: 2,
      area: 115,
      developer: "Tatweer Misr",
      district: "Ain Sokhna",
      isFavorite: false,
      project: "Mostakbal",
    },
  ];

  // Pagination settings
  const itemsPerPage = 3;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(units.length / itemsPerPage);
  const paginatedUnits = units.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* projects Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {paginatedUnits.map((unit) => (
          <UnitCard key={unit.area} {...unit} />
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

export default UnitsPage;
