import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";

const DistrictCard: React.FC<{
  image: string;
  name: string;
  isFavorite: boolean;
}> = ({ image, name, isFavorite }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-md">
      {/* Favorite Button */}
      <FavoriteButton isFavorite={isFavorite} />
      {/* District Image */}
      <Image
        src={image}
        alt={name}
        className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
        width={1000}
        height={250}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <Link
          href={`/specific-district`}
          as={`/specific-district`}
        >
          <p className="text-white font-bold text-lg">{name}</p>
        </Link>
      </div>
    </div>
  );
};

export default DistrictCard;
