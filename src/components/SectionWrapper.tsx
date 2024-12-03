import { HTMLProps } from "react";

const SectionWrapper = ({
  children,
  ...props
}: {
  children: React.ReactNode;
} & Omit<HTMLProps<HTMLElement>, "className">): JSX.Element => {
  return (
    <section className="container mx-auto px-4 mb-8 mt-16" {...props}>
      {children}
    </section>
  );
};

export default SectionWrapper;
