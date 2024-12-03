type PropertyType = {
  id: number;
  type: string;
  count: number;
};

const PropertyTypes = ({
  propertyTypes,
}: {
  propertyTypes: PropertyType[];
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {propertyTypes.map((property) => (
        <div
          key={property.id}
          className="border rounded-lg px-4 py-2 text-center shadow-md bg-gray-50 dark:bg-gray-700"
        >
          <p className="font-bold text-gray-600 dark:text-gray-300">
            {property.type}
          </p>
          <p className="text-[var(--primary-color)] dark:text-[#b39550]">
            {property.count}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PropertyTypes;
