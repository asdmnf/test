import SectionWrapper from "../SectionWrapper";
import CONSTANTS from "@/utils/constants";
import SectionHeader from "../SectionHeader";
import ProjectsWrapper from "./ProjectsWrapper";

const projects = [
  {
    id: 1,
    logo: "/images/developers/slide1.jpg",
    images: [
      "/images/developers/slide1.jpg",
      "/images/developers/slide2.jpg",
      "/images/developers/slide3.jpg",
    ],
    title: "New Cairo",
    isFavorite: true,
  },
  {
    id: 2,
    logo: "/images/developers/slide2.jpg",
    images: [
      "/images/developers/slide1.jpg",
      "/images/developers/slide2.jpg",
      "/images/developers/slide3.jpg",
    ],
    title: "Sokhna",
    isFavorite: false,
  },
  {
    id: 3,
    logo: "/images/developers/slide3.jpg",
    images: [
      "/images/developers/slide1.jpg",
      "/images/developers/slide2.jpg",
      "/images/developers/slide3.jpg",
    ],
    title: "New Zayed",
    isFavorite: true,
  },
  {
    id: 4,
    logo: "/images/developers/slide1.jpg",
    images: [
      "/images/developers/slide1.jpg",
      "/images/developers/slide2.jpg",
      "/images/developers/slide3.jpg",
    ],
    title: "New Capital",
    isFavorite: false,
  },
  {
    id: 5,
    logo: "/images/developers/slide2.jpg",
    images: [
      "/images/developers/slide1.jpg",
      "/images/developers/slide2.jpg",
      "/images/developers/slide3.jpg",
    ],
    title: "North Coast",
    isFavorite: true,
  },
  {
    id: 6,
    logo: "/images/developers/slide3.jpg",
    images: [
      "/images/developers/slide1.jpg",
      "/images/developers/slide2.jpg",
      "/images/developers/slide3.jpg",
    ],
    title: "Mostakbal City",
    isFavorite: false,
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <SectionWrapper>
      <SectionHeader
        normalWord="Our"
        coloredWord="Projects"
        href={CONSTANTS.PATHS.PROJECTS.toLowerCase()}
      />
      <ProjectsWrapper projects={projects} />
    </SectionWrapper>
  );
};

export default ProjectsSection;
