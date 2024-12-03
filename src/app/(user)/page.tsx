import DevelopersSection from "@/components/Developers/DevelopersSection";
import DistrictSection from "@/components/Districts/DistrictSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import NewsSection from "@/components/News/NewsSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import ServicesSection from "@/components/Services/ServicesSection";
import StatisticsSection from "@/components/Statistics/StatisticsSection";
import UnitsSection from "@/components/units/UnitsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DevelopersSection />
      <UnitsSection />
      <ProjectsSection />
      <DistrictSection />
      <ServicesSection />
      <NewsSection />
      <StatisticsSection />
    </>
  );
}

// "use client";

// import DevelopersSection from "@/components/Developers/DevelopersSection";
// import DistrictSection from "@/components/Districts/DistrictSection";
// import HeroSection from "@/components/HeroSection/HeroSection";
// import NewsSection from "@/components/News/NewsSection";
// import ProjectsSection from "@/components/projects/ProjectsSection";
// import ServicesSection from "@/components/Services/ServicesSection";
// import StatisticsSection from "@/components/Statistics/StatisticsSection";
// import UnitsSection from "@/components/units/UnitsSection";
// import dynamic from "next/dynamic";

// const DynamicDevelopersSection = dynamic(
//   () => import("@/components/Developers/DevelopersSection"),
//   {
//     ssr: false,
//   }
// );
// const DynamicUnitsSection = dynamic(
//   () => import("@/components/units/UnitsSection"),
//   {
//     ssr: false,
//   }
// );
// const DynamicProjectsSection = dynamic(
//   () => import("@/components/projects/ProjectsSection"),
//   {
//     ssr: false,
//   }
// );
// const DynamicDistrictSection = dynamic(
//   () => import("@/components/Districts/DistrictSection"),
//   {
//     ssr: false,
//   }
// );
// const DynamicServicesSection = dynamic(
//   () => import("@/components/Services/ServicesSection"),
//   {
//     ssr: false,
//   }
// );
// const DynamicNewsSection = dynamic(
//   () => import("@/components/News/NewsSection"),
//   {
//     ssr: false,
//   }
// );
// const DynamicStatisticsSection = dynamic(
//   () => import("@/components/Statistics/StatisticsSection"),
//   {
//     ssr: false,
//   }
// );

// export default function Home() {
//   return (
//     <>
//       <HeroSection />
//       <DynamicDevelopersSection />
//       <DynamicUnitsSection />
//       <DynamicProjectsSection />
//       <DynamicDistrictSection />
//       <DynamicServicesSection />
//       <DynamicNewsSection />
//       <DynamicStatisticsSection />
//       {/* <DevelopersSection /> */}
//       {/* <UnitsSection />
//       <ProjectsSection />
//       <DistrictSection />
//       <ServicesSection />
//       <NewsSection />
//       <StatisticsSection /> */}
//     </>
//   );
// }
