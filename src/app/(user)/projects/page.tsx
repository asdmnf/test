"use client";

import ProjectCard from "@/components/projects/ProjectCard";
import { useState } from "react";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      logo: "images/developers/slide1.jpg",
      images: [
        "images/developers/slide1.jpg",
        "images/developers/slide2.jpg",
        "images/developers/slide3.jpg",
      ],
      title: "New Cairo",
      isFavorite: true,
    },
    {
      id: 2,
      logo: "images/developers/slide2.jpg",
      images: [
        "images/developers/slide1.jpg",
        "images/developers/slide2.jpg",
        "images/developers/slide3.jpg",
      ],
      title: "Sokhna",
      isFavorite: false,
    },
    {
      id: 3,
      logo: "images/developers/slide3.jpg",
      images: [
        "images/developers/slide1.jpg",
        "images/developers/slide2.jpg",
        "images/developers/slide3.jpg",
      ],
      title: "New Zayed",
      isFavorite: true,
    },
    {
      id: 4,
      logo: "images/developers/slide1.jpg",
      images: [
        "images/developers/slide1.jpg",
        "images/developers/slide2.jpg",
        "images/developers/slide3.jpg",
      ],
      title: "New Capital",
      isFavorite: false,
    },
    {
      id: 5,
      logo: "images/developers/slide2.jpg",
      images: [
        "images/developers/slide1.jpg",
        "images/developers/slide2.jpg",
        "images/developers/slide3.jpg",
      ],
      title: "North Coast",
      isFavorite: true,
    },
    {
      id: 6,
      logo: "images/developers/slide3.jpg",
      images: [
        "images/developers/slide1.jpg",
        "images/developers/slide2.jpg",
        "images/developers/slide3.jpg",
      ],
      title: "Mostakbal City",
      isFavorite: false,
    },
  ];

  // Pagination settings
  const itemsPerPage = 3;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const paginatedProjects = projects.slice(
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
        {paginatedProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
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

export default ProjectsPage;
