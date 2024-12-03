import { HTMLProps } from "react";

const PageWrapper = ({
  children,
  ...props
}: {
  children: React.ReactNode;
} & Omit<HTMLProps<HTMLDivElement>, "className">): JSX.Element => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8" {...props}>
      {children}
    </div>
  );
};

export default PageWrapper;
