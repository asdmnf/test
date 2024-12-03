import Image from "next/image";
import Link from "next/link";

interface NewsItem {
  id: number;
  imageSrc: string;
  date: string;
  title: string;
  link: string;
}

const NewsCard: React.FC<NewsItem> = ({ id, imageSrc, date, title, link }) => {
  return (
    <div
      key={id}
      className="bg-gray-100 rounded-lg overflow-hidden dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
    >
      <Image
        src={imageSrc}
        alt={title}
        width={1000}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
        <Link href={link} className="text-blue-500 hover:underline">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
