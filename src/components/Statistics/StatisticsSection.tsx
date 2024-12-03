interface Statistic {
  number: string;
  label: string;
}

const StatisticsSection: React.FC = () => {
  const statistics: Statistic[] = [
    { number: "3,000+", label: "Employees" },
    { number: "10,000+", label: "Happy Clients" },
    { number: "300+", label: "Developers" },
    { number: "55+", label: "Franchises" },
  ];

  return (
    <section className="bg-orange-100 py-8 px-4 dark:bg-gray-600">
      <h2 className="text-3xl font-bold text-center mb-8">WE GROW EVERY DAY</h2>
      <p className="text-center mb-16">
        Here is the numbers of our success partners
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {statistics.map((statistic, index) => (
          <div key={index} className="text-center">
            <h3 className="text-5xl font-bold text-blue-500">
              {statistic.number}
            </h3>
            <p className="text-lg font-bold mt-2">{statistic.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatisticsSection;
