// import DeveloperCard from "@/components/Developers/DeveloperCard";
// import DistrictCard from "@/components/Districts/DistrictCard";
// import PageCover from "@/components/PageCover";
// import PageWrapper from "@/components/PageWrapper";
// import ProjectCard from "@/components/projects/ProjectCard";
// import PageHeader from "@/components/PageHeader";
// import Location from "@/components/Location";
// import BookMeeting from "@/components/BookMeeting";
// import UnitsWrapper from "@/components/units/UnitsWrapper";
// import PropertyTypes from "../_components/PropertyTypes";
// import Amenities from "../../projects/_components/Amenities";
// import PaymentPlans from "../../projects/_components/PaymentPlans";

import SpecificUnitPage from "@/components/fix/SpecificUnitPage";

const UnitPage = () => {
  //   const unit = {
  //     id: 1,
  //     logo: "images/developers/slide1.jpg",
  //     images: [
  //       "images/developers/slide1.jpg",
  //       "images/developers/slide2.jpg",
  //       "images/developers/slide3.jpg",
  //       "images/developers/slide1.jpg",
  //       "images/developers/slide2.jpg",
  //       "images/developers/slide3.jpg",
  //     ],
  //     status: "Ready To Move",
  //     price: "11,710,000 EGP",
  //     type: "Apartment - Residential",
  //     location: {
  //       lat: 30.0788,
  //       lng: 31.2859,
  //       address: "Cairo International Airport, Egypt",
  //     },
  //     bedrooms: 2,
  //     bathrooms: 2,
  //     area: 150,
  //     developer: "Tatweer Misr",
  //     district: "Ain Sokhna",
  //     paymentPlans: [
  //       {
  //         id: 1,
  //         price: "7,000,000 EGP",
  //         installmentYears: 9,
  //         downPayment: "25%",
  //       },
  //       {
  //         id: 2,
  //         price: "8,000,000 EGP",
  //         installmentYears: 4,
  //         downPayment: "10%",
  //       },
  //     ],
  //     amenities: ["Hospitality facilities", "Roof", "Management", "Building"],
  //     overview:
  //       "good unit, Tatweer Misr is an Egyptian shareholding real estate company that capitalizes on a wealth of industrial and real estate experience.",
  //     isFavorite: true,
  //   };

  //   // Project data
  //   const project = {
  //     id: 1,
  //     title: "ABC Model by TAJ in New Alamein",
  //     startingPrice: "5,000,000 EGP",
  //     logo: "images/developers/slide1.jpg",
  //     images: [
  //       "images/developers/slide1.jpg",
  //       "images/developers/slide2.jpg",
  //       "images/developers/slide3.jpg",
  //       "images/developers/slide1.jpg",
  //       "images/developers/slide2.jpg",
  //       "images/developers/slide3.jpg",
  //     ],
  //     propertyTypes: [
  //       { type: "Sky Villa", count: 1 },
  //       { type: "Beach House", count: 1 },
  //     ],
  //     paymentPlans: [
  //       {
  //         price: "5,000,000 EGP",
  //         installmentYears: 9,
  //         downPayment: "25%",
  //       },
  //       {
  //         price: "5,000,000 EGP",
  //         installmentYears: 4,
  //         downPayment: "10%",
  //       },
  //     ],
  //     amenities: ["Hospitality facilities", "Roof", "Management", "Building"],
  //     overview:
  //       "Established in 2014, Tatweer Misr is an Egyptian shareholding real estate company that capitalizes on a wealth of industrial and real estate experience.",
  //     location: {
  //       lat: 30.0788,
  //       lng: 31.2859,
  //       address: "Cairo International Airport, Egypt",
  //     },
  //     isFavorite: false,
  //   };

  //   const developer = {
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
  //   };

  //   const district = {
  //     id: 1,
  //     name: "New Cairo",
  //     image: "images/developers/slide1.jpg",
  //     isFavorite: true,
  //   };

  //   const units = [
  //     {
  //       id: 1,
  //       images: [
  //         "images/developers/slide1.jpg",
  //         "images/developers/slide2.jpg",
  //         "images/developers/slide3.jpg",
  //       ],
  //       status: "Ready To Move",
  //       price: "11,710,000 EGP",
  //       type: "Apartment - Residential",
  //       location: "Mostakbal City",
  //       bedrooms: 2,
  //       bathrooms: 2,
  //       area: 150,
  //       developer: "Tatweer Misr",
  //       district: "Ain Sokhna",
  //       isFavorite: false,
  //       project: "Mostakbal",
  //     },
  //     {
  //       id: 2,
  //       images: [
  //         "images/developers/slide1.jpg",
  //         "images/developers/slide2.jpg",
  //         "images/developers/slide3.jpg",
  //       ],
  //       status: "Ready To Move",
  //       price: "28,208,000 EGP",
  //       type: "Twin House - Residential",
  //       location: "New Zayed",
  //       bedrooms: 3,
  //       bathrooms: 3,
  //       area: 229,
  //       developer: "Tatweer Misr",
  //       district: "Ain Sokhna",
  //       isFavorite: true,
  //       project: "Mostakbal",
  //     },
  //     {
  //       id: 3,
  //       images: [
  //         "images/developers/slide1.jpg",
  //         "images/developers/slide2.jpg",
  //         "images/developers/slide3.jpg",
  //       ],
  //       status: "Ready To Move",
  //       price: "10,549,000 EGP",
  //       type: "Chalet - Vacation Homes",
  //       location: "Ain Sokhna",
  //       bedrooms: 3,
  //       bathrooms: 2,
  //       area: 115,
  //       developer: "Tatweer Misr",
  //       district: "Ain Sokhna",
  //       isFavorite: true,
  //       project: "Mostakbal",
  //     },
  //     {
  //       id: 4,
  //       images: [
  //         "images/developers/slide1.jpg",
  //         "images/developers/slide2.jpg",
  //         "images/developers/slide3.jpg",
  //       ],
  //       status: "Ready To Move",
  //       price: "10,549,000 EGP",
  //       type: "Chalet - Vacation Homes",
  //       location: "Ain Sokhna",
  //       bedrooms: 3,
  //       bathrooms: 2,
  //       area: 115,
  //       developer: "Tatweer Misr",
  //       district: "Ain Sokhna",
  //       isFavorite: false,
  //       project: "Mostakbal",
  //     },
  //     {
  //       id: 5,
  //       images: [
  //         "images/developers/slide1.jpg",
  //         "images/developers/slide2.jpg",
  //         "images/developers/slide3.jpg",
  //       ],
  //       status: "Ready To Move",
  //       price: "10,549,000 EGP",
  //       type: "Chalet - Vacation Homes",
  //       location: "Ain Sokhna",
  //       bedrooms: 3,
  //       bathrooms: 2,
  //       area: 115,
  //       developer: "Tatweer Misr",
  //       district: "Ain Sokhna",
  //       isFavorite: true,
  //       project: "Bloomfields",
  //     },
  //     {
  //       id: 6,
  //       images: [
  //         "images/developers/slide1.jpg",
  //         "images/developers/slide2.jpg",
  //         "images/developers/slide3.jpg",
  //       ],
  //       status: "Ready To Move",
  //       price: "10,549,000 EGP",
  //       type: "Chalet - Vacation Homes",
  //       location: "Ain Sokhna",
  //       bedrooms: 3,
  //       bathrooms: 2,
  //       area: 115,
  //       developer: "Tatweer Misr",
  //       district: "Ain Sokhna",
  //       isFavorite: false,
  //       project: "Mostakbal",
  //     },
  //   ];

  return <SpecificUnitPage />;

  // return (
  //   <>
  //     <PageCover {...unit} />
  //     <PageWrapper>
  //       <div className="w-full space-y-4">
  //         {/* Title */}
  //         <h1 className="text-3xl font-bold mb-2 text-[var(--primary-color)] dark:text-[#b39550]">
  //           {unit.type}
  //         </h1>

  //         <p className="text-gray-600 dark:text-gray-300 font-semibold">
  //           {unit.overview}
  //         </p>

  //         {/* Starting Price */}
  //         <p className="font-bold">
  //           <strong className="text-gray-600 dark:text-gray-300">
  //             Starting Price:
  //           </strong>{" "}
  //           <span className="text-[var(--primary-color)] dark:text-[#b39550]">
  //             {unit.price}
  //           </span>
  //         </p>

  //         {/* Property Types */}
  //         <PropertyTypes
  //           bedrooms={unit.bedrooms}
  //           bathrooms={unit.bathrooms}
  //           area={unit.area}
  //         />
  //         <Amenities amenities={unit.amenities} />
  //       </div>

  //       {/* Payment Plans */}
  //       <PaymentPlans paymentPlans={unit.paymentPlans} />

  //       {/* developer Section */}
  //       <PageHeader title="Developer" />
  //       <div className="max-w-sm">
  //         <DeveloperCard {...developer} />
  //       </div>

  //       {/* project Section */}
  //       <PageHeader title="Project" />
  //       <div className="max-w-sm">
  //         <ProjectCard {...project} />
  //       </div>

  //       {/* district Section */}
  //       <PageHeader title="District" />
  //       <div className="max-w-sm">
  //         <DistrictCard {...district} />
  //       </div>

  //       {/* units Section */}
  //       <PageHeader title="Same Project Units" length={units.length} />
  //       <UnitsWrapper units={units} />

  //       {/* Location */}
  //       <Location location={unit.location} />

  //       {/* Book a Meeting */}
  //       <BookMeeting />
  //     </PageWrapper>
  //   </>
  // );
};

export default UnitPage;
