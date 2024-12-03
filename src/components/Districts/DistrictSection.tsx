import SectionWrapper from "../SectionWrapper";
import SectionHeader from "../SectionHeader";
import CONSTANTS from "@/utils/constants";
import DistrictsWrapper from "./DistrictsWrapper";

const districts = [
  {
    id: 1,
    name: "New Cairo",
    image: "images/developers/slide1.jpg",
    isFavorite: true,
  },
  {
    id: 2,
    name: "Mostakbal City",
    image: "images/developers/slide2.jpg",
    isFavorite: false,
  },
  {
    id: 3,
    name: "El Shorouk",
    image: "images/developers/slide3.jpg",
    isFavorite: true,
  },
  {
    id: 4,
    name: "New Capital",
    image: "images/developers/slide1.jpg",
    isFavorite: false,
  },
];

const DistrictSection = () => {
  return (
    <SectionWrapper>
      {/* Section Header */}
      <SectionHeader
        normalWord="Browse"
        coloredWord="Districts"
        href={CONSTANTS.PATHS.DISTRICTS.toLowerCase()}
      />

      {/* District Cards */}
      <DistrictsWrapper districts={districts} />
    </SectionWrapper>
  );
};

export default DistrictSection;
