// import BookMeeting from "@/components/BookMeeting";
// import DistrictsWrapper from "@/components/Districts/DistrictsWrapper";
// import SpecificDeveloperPage from "@/components/fix/SpecificDeveloperPage";
// import PageCover from "@/components/PageCover";
// import PageHeader from "@/components/PageHeader";
// import PageWrapper from "@/components/PageWrapper";
// import ProjectsWrapper from "@/components/projects/ProjectsWrapper";
// import UnitsWrapper from "@/components/units/UnitsWrapper";

import SpecificDeveloperPage from "@/components/fix/SpecificDeveloperPage";

// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Developers",
//   description: "Developers Page",
//   openGraph: {
//     title: "Developers",
//     description: "Developers Page",
//   },
//   twitter: {
//     title: "Developers",
//     description: "Developers Page",
//   },
// };
// // Example developer data
// const developer = {
//   id: 1,
//   name: "5 Capital Group Properties",
//   logo: "images/developers/slide1.jpg",
//   images: [
//     "images/developers/slide1.jpg",
//     "images/developers/slide2.jpg",
//     "images/developers/slide3.jpg",
//   ],
//   description:
//     "Capital Group Properties is a leader in creating luxurious and sustainable communities across Egypt, combining innovation and quality in every project, 5 Capital Group Properties is a leader in creating luxurious and sustainable communities across Egypt, combining innovation and quality in every project.",
//   isFavorite: true,
// };

// const units = [
//   {
//     id: 1,
//     images: [
//       "images/developers/slide1.jpg",
//       "images/developers/slide2.jpg",
//       "images/developers/slide3.jpg",
//     ],
//     status: "Ready To Move",
//     price: "11,710,000 EGP",
//     type: "Apartment - Residential",
//     location: "Mostakbal City",
//     bedrooms: 2,
//     bathrooms: 2,
//     area: 150,
//     developer: "Tatweer Misr",
//     district: "Ain Sokhna",
//     isFavorite: false,
//     project: "Mostakbal",
//   },
//   {
//     id: 2,
//     images: [
//       "images/developers/slide1.jpg",
//       "images/developers/slide2.jpg",
//       "images/developers/slide3.jpg",
//     ],
//     status: "Ready To Move",
//     price: "28,208,000 EGP",
//     type: "Twin House - Residential",
//     location: "New Zayed",
//     bedrooms: 3,
//     bathrooms: 3,
//     area: 229,
//     developer: "Tatweer Misr",
//     district: "Ain Sokhna",
//     isFavorite: true,
//     project: "Mostakbal",
//   },
//   {
//     id: 3,
//     images: [
//       "images/developers/slide1.jpg",
//       "images/developers/slide2.jpg",
//       "images/developers/slide3.jpg",
//     ],
//     status: "Ready To Move",
//     price: "10,549,000 EGP",
//     type: "Chalet - Vacation Homes",
//     location: "Ain Sokhna",
//     bedrooms: 3,
//     bathrooms: 2,
//     area: 115,
//     developer: "Tatweer Misr",
//     district: "Ain Sokhna",
//     isFavorite: true,
//     project: "Mostakbal",
//   },
//   {
//     id: 4,
//     images: [
//       "images/developers/slide1.jpg",
//       "images/developers/slide2.jpg",
//       "images/developers/slide3.jpg",
//     ],
//     status: "Ready To Move",
//     price: "10,549,000 EGP",
//     type: "Chalet - Vacation Homes",
//     location: "Ain Sokhna",
//     bedrooms: 3,
//     bathrooms: 2,
//     area: 115,
//     developer: "Tatweer Misr",
//     district: "Ain Sokhna",
//     isFavorite: false,
//     project: "Mostakbal",
//   },
//   {
//     id: 5,
//     images: [
//       "images/developers/slide1.jpg",
//       "images/developers/slide2.jpg",
//       "images/developers/slide3.jpg",
//     ],
//     status: "Ready To Move",
//     price: "10,549,000 EGP",
//     type: "Chalet - Vacation Homes",
//     location: "Ain Sokhna",
//     bedrooms: 3,
//     bathrooms: 2,
//     area: 115,
//     developer: "Tatweer Misr",
//     district: "Ain Sokhna",
//     isFavorite: true,
//     project: "Bloomfields",
//   },
//   {
//     id: 6,
//     images: [
//       "images/developers/slide1.jpg",
//       "images/developers/slide2.jpg",
//       "images/developers/slide3.jpg",
//     ],
//     status: "Ready To Move",
//     price: "10,549,000 EGP",
//     type: "Chalet - Vacation Homes",
//     location: "Ain Sokhna",
//     bedrooms: 3,
//     bathrooms: 2,
//     area: 115,
//     developer: "Tatweer Misr",
//     district: "Ain Sokhna",
//     isFavorite: false,
//     project: "Mostakbal",
//   },
// ];

// const projects = [
//   {
//     id: 1,
//     logo: "images/developers/slide1.jpg",
//     images: [
//       "images/developers/slide1.jpg",
//       "images/developers/slide2.jpg",
//       "images/developers/slide3.jpg",
//     ],
//     title: "New Cairo",
//     isFavorite: true,
//   },
//   {
//     id: 2,
//     logo: "images/developers/slide2.jpg",
//     images: [
//       "images/developers/slide1.jpg",
//       "images/developers/slide2.jpg",
//       "images/developers/slide3.jpg",
//     ],
//     title: "Sokhna",
//     isFavorite: false,
//   },
//   {
//     id: 3,
//     logo: "images/developers/slide3.jpg",
//     images: [
//       "images/developers/slide1.jpg",
//       "images/developers/slide2.jpg",
//       "images/developers/slide3.jpg",
//     ],
//     title: "New Zayed",
//     isFavorite: true,
//   },
//   {
//     id: 4,
//     logo: "images/developers/slide1.jpg",
//     images: [
//       "images/developers/slide1.jpg",
//       "images/developers/slide2.jpg",
//       "images/developers/slide3.jpg",
//     ],
//     title: "New Capital",
//     isFavorite: false,
//   },
//   {
//     id: 5,
//     logo: "images/developers/slide2.jpg",
//     images: [
//       "images/developers/slide1.jpg",
//       "images/developers/slide2.jpg",
//       "images/developers/slide3.jpg",
//     ],
//     title: "North Coast",
//     isFavorite: true,
//   },
//   {
//     id: 6,
//     logo: "images/developers/slide3.jpg",
//     images: [
//       "images/developers/slide1.jpg",
//       "images/developers/slide2.jpg",
//       "images/developers/slide3.jpg",
//     ],
//     title: "Mostakbal City",
//     isFavorite: false,
//   },
// ];

// const districts = [
//   {
//     id: 1,
//     name: "New Cairo",
//     image: "images/developers/slide1.jpg",
//     isFavorite: true,
//   },
//   {
//     id: 2,
//     name: "Mostakbal City",
//     image: "images/developers/slide2.jpg",
//     isFavorite: false,
//   },
//   {
//     id: 3,
//     name: "El Shorouk",
//     image: "images/developers/slide3.jpg",
//     isFavorite: true,
//   },
//   {
//     id: 4,
//     name: "New Capital",
//     image: "images/developers/slide1.jpg",
//     isFavorite: false,
//   },
// ];

const DeveloperPage = () => {
  return <SpecificDeveloperPage />;
  // return (
    // <>
    //   <PageCover {...developer} />
    //   <PageWrapper>
    //     {/* Developer Details */}
    //     <div>
    //       <h1 className="text-3xl font-bold mb-2 text-[var(--primary-color)] dark:text-[#b39550]">
    //         {developer.name}
    //       </h1>
    //       <p className="text-gray-600 dark:text-gray-300 font-semibold">
    //         {developer.description}
    //       </p>
    //     </div>

    //     {/* units Section */}
    //     <PageHeader title="Units" length={units.length} />
    //     <UnitsWrapper units={units} />

    //     {/* projects Section */}
    //     <PageHeader title="Projects" length={projects.length} />
    //     <ProjectsWrapper projects={projects} />

    //     {/* districts Section */}
    //     <PageHeader title="Districts" length={districts.length} />
    //     <DistrictsWrapper districts={districts} />

    //     {/* Book a Meeting */}
    //     <BookMeeting />
    //   </PageWrapper>
    // </>
  // );
};

export default DeveloperPage;
