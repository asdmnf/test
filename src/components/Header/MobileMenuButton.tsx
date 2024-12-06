const MobileMenuButton = ({
  isMenuOpen,
  toggleMenuHandler,
}: {
  isMenuOpen: boolean;
  toggleMenuHandler: () => void;
}): JSX.Element => {
  return (
    <button
      className="lg:hidden focus:outline-none"
      onClick={toggleMenuHandler}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
        />
      </svg>
    </button>
  );
};

export default MobileMenuButton;
