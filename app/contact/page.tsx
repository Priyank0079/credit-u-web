import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Us — creditU",
  description:
    "Get in touch with creditU Technologies. Reach out for inquiries, support or grievance redressal."
};

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden pt-16 sm:pt-20 lg:pt-24">
      <Contact />
      <Footer />
    </main>
  );
}
