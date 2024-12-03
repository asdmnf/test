"use client";

import Link from "next/link";
import { useState } from "react";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  const [showMoreDistricts, setShowMoreDistricts] = useState(false);
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [showMoreDevelopers, setShowMoreDevelopers] = useState(false);

  return (
    <footer className="bg-gray-100 dark:bg-gray-700">
      {/* Main Section */}
      <div className="max-w-6xl mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800 dark:text-gray-200">
        {/* Districts */}
        <div>
          <h3 className="font-bold text-lg text-[var(--primary-color)] dark:text-[#b39527]">
            Districts
          </h3>
          <ul className="space-y-2 mt-4">
            {[
              "New Cairo",
              "Mostakbal City",
              "El Shorouk",
              "New Capital",
              "Ain Sokhna",
              "Sahl Hasheesh",
            ]
              .slice(0, showMoreDistricts ? undefined : 4)
              .map((district) => (
                <li key={district}>
                  <Link href={`/${district.toLowerCase().replace(" ", "-")}`}>
                    {district}
                  </Link>
                </li>
              ))}
          </ul>
          <button
            onClick={() => setShowMoreDistricts(!showMoreDistricts)}
            className="mt-2 text-[var(--primary-color)] font-bold hover:underline dark:text-[#b39527]"
          >
            {showMoreDistricts ? "See Less ▲" : "See More ▼"}
          </button>
        </div>

        {/* Projects */}
        <div>
          <h3 className="font-bold text-lg text-[var(--primary-color)] dark:text-[#b39527]">
            Projects
          </h3>
          <ul className="space-y-2 mt-4">
            {[
              "Al Burouj",
              "Zed East",
              "Zed West",
              "Badya",
              "Sodic East",
              "Karmell",
              "The Estates",
              "Direction White",
            ]
              .slice(0, showMoreProjects ? undefined : 4)
              .map((project) => (
                <li key={project}>
                  <Link href={`/${project.toLowerCase().replace(" ", "-")}`}>
                    {project}
                  </Link>
                </li>
              ))}
          </ul>
          <button
            onClick={() => setShowMoreProjects(!showMoreProjects)}
            className="mt-2 text-[var(--primary-color)] font-bold hover:underline dark:text-[#b39527]"
          >
            {showMoreProjects ? "See Less ▲" : "See More ▼"}
          </button>
        </div>

        {/* Developers */}
        <div>
          <h3 className="font-bold text-lg text-[var(--primary-color)] dark:text-[#b39527]">
            Developers
          </h3>
          <ul className="space-y-2 mt-4">
            {[
              "Mountain View",
              "Misr Italia Properties",
              "Palm Hills Developments",
              "Sodic",
              "Tatweer Misr",
              "LMD",
            ]
              .slice(0, showMoreDevelopers ? undefined : 4)
              .map((developer) => (
                <li key={developer}>
                  <Link href={`/${developer.toLowerCase().replace(" ", "-")}`}>
                    {developer}
                  </Link>
                </li>
              ))}
          </ul>
          <button
            onClick={() => setShowMoreDevelopers(!showMoreDevelopers)}
            className="mt-2 text-[var(--primary-color)] font-bold hover:underline dark:text-[#b39527]"
          >
            {showMoreDevelopers ? "See Less ▲" : "See More ▼"}
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[var(--primary-color)] text-white py-8 dark:text-gray-400">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
          {/* Contact Info */}
          <div>
            <p className="font-bold">Email</p>
            <p>info@black-shire.com</p>
            <p className="mt-4 font-bold">Hotline</p>
            <p>15123</p>
            {/* Icons */}
            <SocialIcons />
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <ul>
              <li className="font-bold">
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Developers</Link>
              </li>
              <li>
                <Link href="/">Projects</Link>
              </li>
              <li>
                <Link href="/">Units</Link>
              </li>
              <li>
                <Link href="/">Districts</Link>
              </li>
            </ul>
            <ul>
              <li className="font-bold">
                <Link href="/">Contact Us</Link>
              </li>
              <li>
                <Link href="/">About Black Shire</Link>
              </li>
            </ul>
            <ul>
              <li className="font-bold">
                <Link href="/">Newsletter!</Link>
              </li>
              <li>News & Events</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 text-sm">
          Copyright @ 2024 BLACK SHIRE - All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
