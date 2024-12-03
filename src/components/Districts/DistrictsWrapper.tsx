import DistrictCard from "./DistrictCard";

type District = {
  id: number;
  name: string;
  image: string;
  isFavorite: boolean;
};

const DistrictsWrapper = ({ districts }: { districts: District[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4">
      {districts.map((district) => (
        <DistrictCard key={district.id} {...district} />
      ))}
    </div>
  );
};

export default DistrictsWrapper;
