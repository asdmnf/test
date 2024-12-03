interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<Service> = ({
  icon,
  title,
  description,
}): JSX.Element => {
  return (
    <div className="text-center border border-gray-200 p-8 rounded-lg shadow mb-4 hover:border-[var(--primary-color)] hover:text-[var(--primary-color)] dark:hover:text-[#b39527] dark:hover:border-[#b39527]">
      <div className="flex justify-center text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
