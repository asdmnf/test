const Amenities = ({ amenities }: { amenities: string[] }) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-4 text-[var(--primary-color)] dark:text-[#b39550]">
        Amenities
      </h2>
      <div className="flex flex-wrap gap-2">
        {amenities.map((amenity) => (
          <span
            key={amenity}
            className="font-bold border px-4 py-2 rounded-lg bg-gray-100 shadow-md text-gray-600 dark:bg-gray-700 dark:text-gray-300"
          >
            {amenity}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
