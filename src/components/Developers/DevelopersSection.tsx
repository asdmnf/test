import SectionWrapper from "../SectionWrapper";
import SectionHeader from "../SectionHeader";
import CONSTANTS from "@/utils/constants";
import DevelopersWrapper from "./DevelopersWrapper";

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
  {
    id: 4,
    name: "Madinat Masr",
    logo: "/images/developers/slide1.jpg",
    images: ["/images/developers/slide1.jpg", "/images/developers/slide2.jpg"],
    description:
      "Since our journey began over 60 years ago, our vision has always been to build for the future and create rich communities that grow.",
    projectsCount: 3,
    isFavorite: false,
  },
  {
    id: 5,
    name: "Madinat Masr",
    logo: "/images/developers/slide2.jpg",
    images: ["/images/developers/slide1.jpg", "/images/developers/slide2.jpg"],
    description:
      "Since our journey began over 60 years ago, our vision has always been to build for the future and create rich communities that grow.",
    projectsCount: 3,
    isFavorite: false,
  },
  {
    id: 6,
    name: "Madinat Masr",
    logo: "/images/developers/slide3.jpg",
    images: ["/images/developers/slide1.jpg", "/images/developers/slide2.jpg"],
    description:
      "Since our journey began over 60 years ago, our vision has always been to build for the future and create rich communities that grow.",
    projectsCount: 3,
    isFavorite: false,
  },
];

const DevelopersSection = () => {
  return (
    <SectionWrapper>
      <SectionHeader
        normalWord="Our"
        coloredWord="Developers"
        href={CONSTANTS.PATHS.DEVELOPERS.toLowerCase()}
      />
      <DevelopersWrapper developers={developers} />
    </SectionWrapper>
  );
};

export default DevelopersSection;
