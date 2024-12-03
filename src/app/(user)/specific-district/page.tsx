// import BookMeeting from "@/components/BookMeeting";
// import DevelopersWrapper from "@/components/Developers/DevelopersWrapper";
// import Location from "@/components/Location";
// import PageCover from "@/components/PageCover";
// import PageHeader from "@/components/PageHeader";
// import PageWrapper from "@/components/PageWrapper";
// import ProjectsWrapper from "@/components/projects/ProjectsWrapper";
// import UnitsWrapper from "@/components/units/UnitsWrapper";

import SpecificDistrictPage from "@/components/fix/SpecificDistrictPage";

// const district = {
//   id: 1,
//   name: "New Cairo",
//   logo: "images/developers/slide1.jpg",
//   images: [
//     "images/developers/slide1.jpg",
//     "images/developers/slide2.jpg",
//     "images/developers/slide3.jpg",
//     "images/developers/slide1.jpg",
//     "images/developers/slide2.jpg",
//     "images/developers/slide3.jpg",
//   ],
//   location: {
//     lat: 30.0788,
//     lng: 31.2859,
//     address: "Cairo International Airport, Egypt",
//   },
//   description:
//     "Established in 2014, Tatweer Misr is an Egyptian shareholding real estate company that capitalizes on a wealth of industrial and real estate experience.",
//   isFavorite: true,
// };

// const developers = [
//   {
//     id: 1,
//     name: "Tatweer Misr",
//     logo: "images/developers/slide1.jpg",
//     images: [
//       "images/developers/slide1.jpg",
//       "images/developers/slide2.jpg",
//       "images/developers/slide3.jpg",
//     ],
//     description:
//       "Established in 2014, Tatweer Misr is an Egyptian shareholding real estate company, that capitalizes on a wealth of industrial and real estate experience.",
//     projectsCount: 6,
//     isFavorite: false,
//   },
//   {
//     id: 2,
//     name: "LMD",
//     logo: "images/developers/slide2.jpg",
//     images: [
//       "images/developers/slide1.jpg",
//       "images/developers/slide2.jpg",
//       "images/developers/slide3.jpg",
//     ],
//     description:
//       "Landmark was founded by Engineer Ahmed Sabbour, one of the pioneers in the Egyptian real estate market.",
//     projectsCount: 4,
//     isFavorite: true,
//   },
//   {
//     id: 3,
//     name: "Madinat Masr",
//     logo: "images/developers/slide3.jpg",
//     images: ["images/developers/slide1.jpg", "images/developers/slide2.jpg"],
//     description:
//       "Since our journey began over 60 years ago, our vision has always been to build for the future and create rich communities that grow.",
//     projectsCount: 3,
//     isFavorite: false,
//   },
//   {
//     id: 4,
//     name: "Madinat Masr",
//     logo: "images/developers/slide1.jpg",
//     images: ["images/developers/slide1.jpg", "images/developers/slide2.jpg"],
//     description:
//       "Since our journey began over 60 years ago, our vision has always been to build for the future and create rich communities that grow.",
//     projectsCount: 3,
//     isFavorite: false,
//   },
//   {
//     id: 5,
//     name: "Madinat Masr",
//     logo: "images/developers/slide2.jpg",
//     images: ["images/developers/slide1.jpg", "images/developers/slide2.jpg"],
//     description:
//       "Since our journey began over 60 years ago, our vision has always been to build for the future and create rich communities that grow.",
//     projectsCount: 3,
//     isFavorite: false,
//   },
//   {
//     id: 6,
//     name: "Madinat Masr",
//     logo: "images/developers/slide3.jpg",
//     images: ["images/developers/slide1.jpg", "images/developers/slide2.jpg"],
//     description:
//       "Since our journey began over 60 years ago, our vision has always been to build for the future and create rich communities that grow.",
//     projectsCount: 3,
//     isFavorite: false,
//   },
// ];

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

const DistrictPage = () => {
  return <SpecificDistrictPage />;
  // return (
  //   <>
  //     <PageCover {...district} />
  //     <PageWrapper>
  //       {/* District Details */}
  //       <div>
  //         <h1 className="text-3xl font-bold mb-2 text-[var(--primary-color)] dark:text-[#b39550]">
  //           {district.name}
  //         </h1>
  //         <p className="text-gray-600 dark:text-gray-300 font-semibold">
  //           {district.description}
  //         </p>
  //       </div>

  //       {/* developers Section */}
  //       <PageHeader title="Developers" length={developers.length} />
  //       <DevelopersWrapper developers={developers} />

  //       {/* units Section */}
  //       <PageHeader title="Units" length={units.length} />
  //       <UnitsWrapper units={units} />

  //       {/* projects Section */}
  //       <PageHeader title="Projects" length={projects.length} />
  //       <ProjectsWrapper projects={projects} />

  //       {/* Location */}
  //       <Location location={district.location} />

  //       {/* Book a Meeting */}
  //       <BookMeeting />
  //     </PageWrapper>
  //   </>
  // );
};

export default DistrictPage;
