import SocialIcon from "../SocialIcon";

const SocialIcons = () => {
  return (
    <div className="w-fit bg-gray-200 dark:bg-gray-700 dark:text-gray-300 bg-opacity-80 rounded-lg p-4 flex flex-row gap-4 shadow-lg mt-2">
      <SocialIcon
        href="https://facebook.com"
        alt="Facebook"
        src="icons/facebook.svg"
      />
      <SocialIcon
        href="https://instagram.com"
        alt="Instagram"
        src="icons/instagram.svg"
      />
      <SocialIcon
        href="https://twitter.com"
        alt="Twitter"
        src="icons/twitter.svg"
      />
      <SocialIcon
        href="https://youtube.com"
        alt="YouTube"
        src="icons/youtube.svg"
      />
    </div>
  );
};

export default SocialIcons;
