import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Footer from "@/components/Footer";
import TrustedCompanies from "@/components/TrustedCompanies";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustedCompanies />
      <Services />
      <About />
      <Footer />
    </main>
  );
};

export default Index;
