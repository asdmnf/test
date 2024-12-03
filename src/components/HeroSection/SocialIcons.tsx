import SocialIcon from "../SocialIcon";

const SocialIcons = () => {
  return (
    <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 bg-gray-200 dark:bg-gray-700 dark:text-gray-300 bg-opacity-80 rounded-lg p-4 flex flex-col gap-4 shadow-lg">
      <SocialIcon
        href="https://facebook.com"
        alt="Facebook"
        src="/icons/facebook.svg"
      />
      <SocialIcon
        href="https://instagram.com"
        alt="Instagram"
        src="/icons/instagram.svg"
      />
      <SocialIcon
        href="https://twitter.com"
        alt="Twitter"
        src="/icons/twitter.svg"
      />
      <SocialIcon
        href="https://youtube.com"
        alt="YouTube"
        src="/icons/youtube.svg"
      />
    </div>
  );
};

export default SocialIcons;
