import Image from "next/image";

const AboutPage = () => {
  const about = {
    leadership: {
      name: "ZezO",
      position: "CEO & CTO",
    },
    why: "Why Black Shire Why Black Shire Why Black Shire Why Black Shire Why Black Shire Why Black Shire Why Black Shire Why Black Shire Why Black Shire Why Black Shire Why Black Shire Why Black Shire Why Black Shire Why Black Shire Why Black Shire Why Black Shire Why Black Shire ",
    history:
      "History Why Black Shire History History Why Black Shire History History Why Black Shire History History Why Black Shire History History Why Black Shire History History Why Black Shire History History Why Black Shire History History Why Black Shire History History Why Black Shire History History Why Black Shire History History Why Black Shire History ",
  };
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* About Info */}
      <div className="flex flex-col items-center md:flex-row gap-8">
        {/* About Logo */}
        <div className="w-full md:w-1/2">
          <Image
            src="images/logo.png"
            alt="Black Shire Logo"
            width={500}
            height={500}
            className="size-full object-contain rounded-lg bg-gray-200 dark:bg-gray-700"
          />
        </div>

        {/* Leadership */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-[var(--primary-color)] dark:text-[#b39527]">
            {about.leadership.name}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            {about.leadership.position}
          </p>
        </div>
      </div>
      {/* Why */}
      <div>
        <h1 className="text-3xl font-bold mb-2 mt-8">
          Why{" "}
          <span className="text-[var(--primary-color)] dark:text-[#b39527]">
            Black Shire
          </span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300">{about.why}</p>
      </div>

      {/* History */}
      <div>
        <h1 className="text-3xl font-bold mb-2 mt-8">
          Our{" "}
          <span className="text-[var(--primary-color)] dark:text-[#b39527]">
            History
          </span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300">{about.history}</p>
      </div>
    </div>
  );
};

export default AboutPage;
