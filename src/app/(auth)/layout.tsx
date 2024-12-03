import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export const metadata = {
  title: "Black Shire",
  description: "Black Shire Real Estate",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
