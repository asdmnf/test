import SectionWrapper from "../SectionWrapper";
import SectionHeader from "../SectionHeader";
import CONSTANTS from "@/utils/constants";
import UnitsWrapper from "./UnitsWrapper";

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

const UnitsSection = () => {
  return (
    <SectionWrapper>
      <SectionHeader
        normalWord="Featured"
        coloredWord="Units"
        href={CONSTANTS.PATHS.UNITS.toLowerCase()}
      />
      <UnitsWrapper units={units} />
    </SectionWrapper>
  );
};

export default UnitsSection;
