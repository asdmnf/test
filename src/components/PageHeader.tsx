const PageHeader = ({ title, length }: { title: string; length?: number }) => {
  return (
    <h2 className="text-2xl font-bold mb-4 mt-8 text-[var(--primary-color)] dark:text-[#b39527]">
      {title}
      {length && (
        <span className="text-gray-600 dark:text-gray-300"> ({length})</span>
      )}
    </h2>
  );
};

export default PageHeader;
