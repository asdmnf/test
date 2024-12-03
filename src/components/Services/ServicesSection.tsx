import {
  FaBriefcase,
  FaChartBar,
  FaCity,
  FaHome,
  FaRedo,
} from "react-icons/fa";
import ServiceCard from "./ServiceCard";
import SectionWrapper from "../SectionWrapper";
import SectionHeader from "../SectionHeader";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      icon: <FaCity />,
      title: "Exclusive Projects",
      description: "Unique and high-end projects available to select clients.",
    },
    {
      icon: <FaHome />,
      title: "Residential",
      description:
        "Offering tailored solutions for home buyers, renters, and sellers.",
    },
    {
      icon: <FaBriefcase />,
      title: "Commercial",
      description: "Expertise in commercial property management and leasing.",
    },
    {
      icon: <FaRedo />,
      title: "Resale",
      description:
        "Exclusive and premium resale opportunities available to select clients.",
    },
    {
      icon: <FaChartBar />,
      title: "Investment Consulting",
      description:
        "Offering tailored solutions for home buyers, renters, and sellers.",
    },
  ];

  return (
    <SectionWrapper>
      <SectionHeader
        normalWord="Our"
        coloredWord="Services"
        href="#"
        isLinkDisabled={true}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-2 gap-y-4">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ServicesSection;
