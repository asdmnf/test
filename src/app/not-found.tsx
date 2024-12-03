import CONSTANTS from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="relative w-40 h-40 mb-6">
        {/* Your Logo */}
        <Image
          src="/images/logo.png" // Replace with the path to your uploaded logo
          alt="Not Found"
          width={200}
          height={200}
          className="w-full h-full object-contain"
        />
      </div>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
        Page Not Found
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mt-2">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link
        href={`${CONSTANTS.PATHS.HOME}`}
        as={`${CONSTANTS.PATHS.HOME}`}
        className="mt-4 px-6 py-2 bg-[var(--primary-color)] text-white rounded-lg hover:bg-opacity-90 transition duration-300"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
