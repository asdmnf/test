import Image from "next/image";

const newsItem = {
  id: 1,
  imageSrc: "images/developers/slide1.jpg",
  date: "21 Oct",
  title: "Details and Information About Al Galala Ain Sokhna 2024",
  link: "/news/specific-news",
  article:
    "Details and Information About Al Galala Ain Sokhna 2024 Details and Information About Al Galala Ain Sokhna 2024 Details and Information About Al Galala Ain Sokhna 2024 Details and Information About Al Galala Ain Sokhna 2024 Details and Information About Al Galala Ain Sokhna 2024 Details and Information About Al Galala Ain Sokhna 2024 Details and Information About Al Galala Ain Sokhna 2024 Details and Information About Al Galala Ain Sokhna 2024 Details and Information About Al Galala Ain Sokhna 2024 ",
};

const NewsItemPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* NewsItem Info */}
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 mb-8">
        {/* NewsItem Logo */}
        <Image
          src={newsItem.imageSrc}
          alt={newsItem.title}
          width={500}
          height={500}
          className="size-full object-contain rounded-lg"
        />

        {/* NewsItem Details */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{newsItem.title}</h1>
          <p className="text-gray-600 dark:text-gray-400">{newsItem.date}</p>
        </div>
      </div>

      {/* Article */}
      <p className="text-gray-600 dark:text-gray-300 text-justify">
        {newsItem.article}
      </p>

      {/* Book a Meeting */}
      <div className="mt-8 border rounded-lg p-4 shadow-md">
        <h2 className="text-xl font-bold mb-4 text-red-500">Book a Meeting</h2>
        <div className="flex gap-4 mb-4">
          <button className="bg-red-500 text-white py-2 px-4 rounded-lg">
            In-Person
          </button>
          <button className="bg-gray-200 py-2 px-4 rounded-lg">
            Video Call
          </button>
        </div>
        <div>
          <label className="block text-gray-600">Select Date</label>
          <input type="date" className="border rounded-lg p-2 w-full mt-2" />
        </div>
        <div className="mt-4">
          <label className="block text-gray-600">Select Time</label>
          <select className="border rounded-lg p-2 w-full mt-2">
            <option>10:00 AM</option>
            <option>11:00 AM</option>
            <option>12:00 PM</option>
          </select>
        </div>
        <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg w-full">
          Schedule Now
        </button>
      </div>
    </div>
  );
};

export default NewsItemPage;
