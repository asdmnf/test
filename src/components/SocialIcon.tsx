import Image from "next/image";
import Link from "next/link";

interface SocialIconProps {
  href: string;
  alt: string;
  src: string;
}

const SocialIcon = ({ href, alt, src }: SocialIconProps): JSX.Element => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transition-transform"
  >
    <Image
      src={src}
      alt={alt}
      width={24}
      height={24}
      className="w-6 h-6 dark:invert"
    />
  </Link>
);

export default SocialIcon;
