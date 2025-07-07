import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import TermsTabs from "../components/layout/TermsTabComponent";
import Seo from "../components/ui/Seo";

const TermsAndCondition = () => {
  return (
    <>
      <Seo
        title="Terms & Conditions | KBS HERBAL India"
        description="Read the terms and conditions for using KBS HERBAL India's website and services. Understand your rights and responsibilities."
        keywords="terms, conditions, KBS HERBAL, Ayurveda, herbal products, India"
        url="/terms-and-conditions"
      />
      <Header />
      <main className="p-2 md:p-10">
        <div className="space-y-2 mb-6">
  <h1 style={{fontFamily:"sans"}} className="text-2xl md:text-3xl font-bold text-[#325e12]">
    TERMS & CONDITIONS
  </h1>
  <p className="text-xs md:text-sm text-gray-500">
    Last Updated: 21/06/2025
  </p>
  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
    Welcome to <span className="font-medium">KBS HERBAL India</span>. By accessing,
    browsing, or using our website, you agree to be legally bound by these
    Terms & Conditions ("Terms"). These Terms govern your use of our
    website, services, and the purchase of Ayurveda-based products sold by us.
    <br />
    <br className="hidden md:block" />
    This is an electronic record under the Information Technology Act, 2000 and the
    rules made thereunder. This document does not require any physical or
    digital signatures.
  </p>
</div>

        <TermsTabs/>
        
      </main>
      <Footer />
    </>
  );
};

export default TermsAndCondition;
