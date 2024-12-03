import Link from "next/link";

const MobileMenu = ({
  mobileMenuLinks,
  closeMenuHandler,
}: {
  mobileMenuLinks: string[];
  closeMenuHandler: () => void;
}): JSX.Element => {
  return (
    <nav className="lg:hidden bg-white dark:bg-gray-900 shadow-md">
      <ul className="flex flex-col items-center space-y-4 py-4">
        {mobileMenuLinks.map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase().replace(" ", "-")}`}
            onClick={closeMenuHandler}
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition duration-200"
          >
            {item}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;
