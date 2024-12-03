import CONSTANTS from "@/utils/constants";
import SectionHeader from "../SectionHeader";
import SectionWrapper from "../SectionWrapper";
import NewsCard from "./NewsCard";

interface NewsItem {
  id: number;
  imageSrc: string;
  date: string;
  title: string;
  link: string;
}

const NewsSection: React.FC = () => {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      imageSrc: "images/developers/slide1.jpg",
      date: "21 Oct",
      title: "Details and Information About Al Galala Ain Sokhna 2024",
      link: "/specific-news",
    },
    {
      id: 2,
      imageSrc: "images/developers/slide2.jpg",
      date: "15 Oct",
      title:
        "Your complete guide to all the details and map of the New Administrative Capital",
      link: "/specific-news",
    },
    {
      id: 3,
      imageSrc: "images/developers/slide3.jpg",
      date: "15 Sep",
      title:
        "Details About Ras El Hekma and The Most Important Real Estate Projects and Investments in the Area",
      link: "/specific-news",
    },
  ];

  return (
    <SectionWrapper>
      <SectionHeader
        normalWord="Latest"
        coloredWord="News"
        href={CONSTANTS.PATHS.NEWS.toLowerCase()}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default NewsSection;
