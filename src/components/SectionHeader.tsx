import Link from "next/link";

const SectionHeader = ({
  normalWord,
  coloredWord,
  href,
  isLinkDisabled = false,
}: {
  normalWord: string;
  coloredWord: string;
  href: string;
  isLinkDisabled?: boolean;
}) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-3xl font-bold">
        {normalWord}{" "}
        <span className="text-[var(--primary-color)] dark:text-[#b39527]">
          {coloredWord}
        </span>
      </h2>

      {!isLinkDisabled && (
        <Link
          href={href}
          className="px-4 py-2 font-semibold bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-[#b39527] rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-200 text-center"
        >
          View More
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
