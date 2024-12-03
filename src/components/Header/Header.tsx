"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitcher";
import useHeader from "./useHeader";
import dynamic from "next/dynamic";
import MobileMenuButton from "./MobileMenuButton";
import CONSTANTS from "@/utils/constants";

const DynamicMobileMenu = dynamic(() => import("./MobileMenu"), {
  ssr: false,
});

const Header = () => {
  const {
    pathname,
    links,
    mobileMenuLinks,
    isMenuOpen,
    toggleMenuHandler,
    closeMenuHandler,
  } = useHeader();

  return (
    <header className="h-[var(--header-height)] bg-[var(--primary-color)] shadow-md sticky top-0 z-50 transition duration-300">
      <div className="container mx-auto px-4 flex items-center justify-between h-full">
        {/* Logo */}
        <Link href={CONSTANTS.PATHS.HOME}>
          <Image
            src="images/logo.png"
            alt="Black Shire Real Estate Logo"
            width={80}
            height={80}
            className="cursor-pointer"
          />
        </Link>

        {/* Navbar */}
        <nav className="hidden lg:flex space-x-8">
          {links.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className={`text-[var(--text-color)] hover:text-[var(--hover-text-color)] hover:underline hover:underline-offset-4 font-medium transition duration-200 ${
                pathname === `/${item.toLowerCase().replace(" ", "-")}` &&
                "underline underline-offset-4"
              }`}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <ThemeSwitcher />

          {/* Language Toggle */}
          {/* TODO: Add Language Toggle */}

          {/* Login and Sign Up */}
          <Link
            href={CONSTANTS.PATHS.LOGIN}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-200"
          >
            Login
          </Link>
          <Link
            href={CONSTANTS.PATHS.SIGN_UP}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-200"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Theme and Language Switcher */}
        <div className="lg:hidden ">
          <ThemeSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <MobileMenuButton
          isMenuOpen={isMenuOpen}
          toggleMenuHandler={toggleMenuHandler}
        />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <DynamicMobileMenu
          mobileMenuLinks={mobileMenuLinks}
          closeMenuHandler={closeMenuHandler}
        />
      )}
    </header>
  );
};

export default Header;
