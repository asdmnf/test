"use client";

import NewsCard from "@/components/News/NewsCard";
import { useState } from "react";

interface NewsItem {
  id: number;
  imageSrc: string;
  date: string;
  title: string;
  link: string;
}

const NewsItemsPage = () => {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      imageSrc: "/images/developers/slide1.jpg",
      date: "21 Oct",
      title: "Details and Information About Al Galala Ain Sokhna 2024",
      link: "/news/al-galala-ain-sokhna-2024",
    },
    {
      id: 2,
      imageSrc: "/images/developers/slide2.jpg",
      date: "15 Oct",
      title:
        "Your complete guide to all the details and map of the New Administrative Capital",
      link: "/news/new-administrative-capital",
    },
    {
      id: 3,
      imageSrc: "/images/developers/slide3.jpg",
      date: "15 Sep",
      title:
        "Details About Ras El Hekma and The Most Important Real Estate Projects and Investments in the Area",
      link: "/news/ras-el-hekma",
    },
  ];

  // Pagination settings
  const itemsPerPage = 3;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(newsItems.length / itemsPerPage);
  const paginatedNewsItems = newsItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* news Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {paginatedNewsItems.map((newsItem) => (
          <NewsCard key={newsItem.id} {...newsItem} />
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

export default NewsItemsPage;
