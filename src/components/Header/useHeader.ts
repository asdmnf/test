import CONSTANTS from "@/utils/constants";
import { usePathname } from "next/navigation";
import { useState } from "react";

const useHeader = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const links: string[] = Object.values(CONSTANTS.PATHS).filter(
    (path) =>
      ![
        CONSTANTS.PATHS.HOME,
        CONSTANTS.PATHS.LOGIN,
        CONSTANTS.PATHS.SIGN_UP,
      ].includes(path)
  );

  const mobileMenuLinks: string[] = [...links, "Login", "Sign Up"];

  const closeMenuHandler = () => setIsMenuOpen(false);

  const toggleMenuHandler = () => setIsMenuOpen(!isMenuOpen);

  return {
    pathname,
    links,
    mobileMenuLinks,
    isMenuOpen,
    toggleMenuHandler,
    closeMenuHandler,
  };
};

export default useHeader;
