import BookMeeting from "@/components/BookMeeting";
import DeveloperCard from "@/components/Developers/DeveloperCard";
import DistrictCard from "@/components/Districts/DistrictCard";
import PageCover from "@/components/PageCover";
import PageHeader from "@/components/PageHeader";
import PageWrapper from "@/components/PageWrapper";
import PropertyTypes from "./_components/PropertyTypes";
import PaymentPlans from "./_components/PaymentPlans";
import Amenities from "./_components/Amenities";
import UnitsWrapper from "@/components/units/UnitsWrapper";
import Location from "@/components/Location";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects Page",
  openGraph: {
    title: "Projects",
    description: "Projects Page",
  },
  twitter: {
    title: "Projects",
    description: "Projects Page",
  },
};

const ProjectPage = () => {
  // Project data
  const project = {
    id: 1,
    title: "ABC Model by TAJ in New Alamein",
    startingPrice: "5,000,000 EGP",
    logo: "/images/developers/slide1.jpg",
    images: [
      "/images/developers/slide1.jpg",
      "/images/developers/slide2.jpg",
      "/images/developers/slide3.jpg",
      "/images/developers/slide1.jpg",
      "/images/developers/slide2.jpg",
      "/images/developers/slide3.jpg",
    ],
    propertyTypes: [
      { id: 1, type: "Sky Villa", count: 1 },
      { id: 2, type: "Beach House", count: 1 },
    ],
    paymentPlans: [
      {
        id: 1,
        price: "5,000,000 EGP",
        installmentYears: 9,
        downPayment: "25%",
      },
      {
        id: 2,
        price: "6,000,000 EGP",
        installmentYears: 6,
        downPayment: "10%",
      },
      {
        id: 3,
        price: "7,500,000 EGP",
        installmentYears: 4,
        downPayment: "7%",
      },
    ],
    amenities: ["Hospitality facilities", "Roof", "Management", "Building"],
    overview:
      "Established in 2014, Tatweer Misr is an Egyptian shareholding real estate company that capitalizes on a wealth of industrial and real estate experience.",
    location: {
      lat: 30.0788,
      lng: 31.2859,
      address: "Cairo International Airport, Egypt",
    },
    isFavorite: true,
  };

  const developer = {
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
  };

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

  return (
    <>
      <PageCover {...project} />
      <PageWrapper>
        {/* <div className="flex flex-col md:flex-row gap-8"> */}
        <div className="w-full space-y-4">
          {/* Title */}
          <h1 className="text-3xl font-bold mb-2 text-[var(--primary-color)] dark:text-[#b39550]">
            {project.title}
          </h1>

          <p className="text-gray-600 dark:text-gray-300 font-semibold">
            {project.overview}
          </p>

          {/* Starting Price */}
          <p className="font-bold">
            <strong className="text-gray-600 dark:text-gray-300">
              Starting Price:
            </strong>{" "}
            <span className="text-[var(--primary-color)] dark:text-[#b39550]">
              {project.startingPrice}
            </span>
          </p>

          {/* Property Types */}
          <PropertyTypes propertyTypes={project.propertyTypes} />
          <Amenities amenities={project.amenities} />
        </div>
        {/* </div> */}

        {/* Payment Plans */}
        <PaymentPlans paymentPlans={project.paymentPlans} />

        {/* Overview */}
        {/* <div className="mt-4">
          <h2 className="text-xl font-bold mb-4 text-[var(--primary-color)] dark:text-[#b39550]">
            Overview
          </h2>
          <p className="text-gray-600 dark:text-gray-300">{project.overview}</p>
        </div> */}

        {/* developer Section */}
        <PageHeader title="Developer" />
        <div className="max-w-sm">
          <DeveloperCard {...developer} />
        </div>

        {/* districts Section */}
        <PageHeader title="District" />
        <div className="max-w-sm">
          <DistrictCard {...districts[0]} />
        </div>

        {/* units Section */}
        <PageHeader title="Units" length={units.length} />
        <UnitsWrapper units={units} />

        {/* Location */}
        <Location location={project.location} />

        {/* Book a Meeting */}
        <BookMeeting />
      </PageWrapper>
    </>
  );
};

export default ProjectPage;
