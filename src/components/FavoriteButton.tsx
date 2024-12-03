const FavoriteButton: React.FC<{
  iconPosition?: string;
  isFavorite: boolean;
  // onToggle: () => void;
}> = ({ iconPosition = "top-4 right-4", isFavorite }): JSX.Element => (
  <button
    // onClick={onToggle}
    className={`absolute ${iconPosition} hover:scale-110 transition-transform z-10`}
  >
    {isFavorite ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="var(--primary-color)"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-[var(--primary-color)] dark:fill-[#b39527] dark:stroke-[#b39527]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 10-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-gray-900 dark:text-gray-300"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 10-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
        />
      </svg>
    )}
  </button>
);

export default FavoriteButton;
