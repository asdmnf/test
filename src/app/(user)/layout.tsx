import ContactUs from "@/components/ContactUs/ContactUs ";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import SubscriptionSection from "@/components/Subscription/SubscriptionSection";

export const metadata = {
  title: "Black Shire",
  description: "Black Shire Real Estate",
};

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
          <main>{children}</main>
          <ContactUs />
          <SubscriptionSection />
          <Footer />
    </>
  );
}
