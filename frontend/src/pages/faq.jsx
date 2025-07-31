import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const FaqPage = () => {
  return (
    <>
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-8 text-gray-900">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">
          Frequently Asked Questions (FAQ)
        </h1>
        <p className="text-base sm:text-lg mb-8">
          Welcome to KBS HERBAL India. Below are answers to commonly asked questions
          about our products, shipping, returns, and more.
        </p>

        {/* About Products */}
      <section className="space-y-5">
  <h2 className="text-xl sm:text-2xl font-semibold">About KBS Herbal Products</h2>

  <div>
    <p className="text-base font-medium text-green-700">Are your products 100% Ayurvedic?</p>
    <p className="text-sm sm:text-base">
      Yes, all our products are formulated using authentic Ayurvedic principles and natural ingredients.
      They are free from harmful chemicals, parabens, and synthetic fragrances.
    </p>
  </div>

  <div>
    <p className="text-base font-medium text-green-700">Are your products clinically tested or certified?</p>
    <p className="text-sm sm:text-base">
      Yes, our products are manufactured in GMP-certified facilities and follow quality standards. Each product undergoes quality checks before packaging.
    </p>
  </div>

  <div>
    <p className="text-base font-medium text-green-700">Are your products cruelty-free?</p>
    <p className="text-sm sm:text-base">Absolutely. We do not test our products on animals.</p>
  </div>

  <div>
    <p className="text-base font-medium text-green-700">Can your products be used by all age groups?</p>
    <p className="text-sm sm:text-base">
      Most of our products are safe for all age groups, but we recommend reading the label or consulting
      an Ayurvedic practitioner for children or those with specific conditions.
    </p>
  </div>
</section>

{/* Orders & Shipping */}
<section className="mt-10 space-y-5">
  <h2 className="text-xl sm:text-2xl font-semibold">Orders & Shipping</h2>

  <div>
    <p className="text-base font-medium text-green-700">How long will it take to receive my order?</p>
    <p className="text-sm sm:text-base">Orders are dispatched within 48 hours and delivered within 6–8 working days</p>
  </div>

  <div>
    <p className="text-base font-medium text-green-700">How do I track my order?</p>
    <p className="text-sm sm:text-base">
      Once your order is shipped, you will receive a tracking link via SMS or email.
    </p>
  </div>

  <div>
    <p className="text-base font-medium text-green-700">Do you ship across India?</p>
    <p className="text-sm sm:text-base">
      Yes, we offer pan-India shipping through trusted courier partners.
    </p>
  </div>

  <div>
    <p className="text-base font-medium text-green-700">Can I change my delivery address after placing the order?</p>
    <p className="text-sm sm:text-base">
      If your order hasn’t been shipped yet, you can contact us within 12 hours of placing it to change the address.
    </p>
  </div>
</section>

{/* Payments */}
<section className="mt-10 space-y-5">
  <h2 className="text-xl sm:text-2xl font-semibold">Payments</h2>

  <div>
    <p className="text-base font-medium text-green-700">What payment methods do you accept?</p>
    <p className="text-sm sm:text-base">
      We accept UPI, Debit/Credit Cards, Net Banking, and major Wallets. Cash on Delivery (COD) is also available.
    </p>
  </div>

  <div>
    <p className="text-base font-medium text-green-700">Is it safe to make an online payment on your site?</p>
    <p className="text-sm sm:text-base">
      Yes, our website uses 100% secure and encrypted payment gateways to protect your details.
    </p>
  </div>
</section>


        <div className="max-w-4xl mx-auto py-10 space-y-8 text-sm text-gray-800">
  <section>
    <h2 className="font-bold text-base text-black mb-2">Returns, Refunds & Exchanges</h2>

    <p className="text-green-700 font-semibold">What if I receive a wrong or damaged product?</p>
    <p className="mb-4">Please contact us within 2 days of delivery with an unboxing video and images. We’ll initiate an exchange or replacement.</p>

    <p className="text-green-700 font-semibold">I received an incomplete order. What should I do?</p>
    <p className="mb-4">Reach out to us within 2 days with an unboxing video. We’ll ensure the missing item is sent.</p>

    <p className="text-green-700 font-semibold">Can I return a product if I ordered the wrong item?</p>
    <p className="mb-4">Yes, but a return pickup and redelivery fee of INR 400 will apply.</p>

    <p className="text-green-700 font-semibold">How long does it take to process a refund?</p>
    <p className="mb-4">Refunds (if applicable) are processed within 6–8 business days and reflect in your bank within 5–10 days.</p>
  </section>

  <section>
    <h2 className="font-bold text-base text-black mb-2">Cancellations</h2>

    <p className="text-green-700 font-semibold">Can I cancel my order?</p>
    <p className="mb-4">Orders can be canceled within 24 hours or before the shipping label is generated. Once dispatched, cancellations are not allowed.</p>

    <p className="text-green-700 font-semibold">Can I cancel a prepaid order?</p>
    <p className="mb-4">Prepaid orders are processed instantly and cannot be canceled after confirmation.</p>
  </section>

  <section>
    <h2 className="font-bold text-base text-black mb-2">Customer Support</h2>

    <p className="text-green-700 font-semibold">How can I contact KBS HERBAL India?</p>
    <ul className="list-disc pl-5 mb-4">
      <li>WhatsApp: [Add Number]</li>
      <li>Email: support@kbsherbal.in</li>
      <li>Instagram DM: [@kbsherbalindia]</li>
      <li>Phone: [Add Helpline Number]</li>
    </ul>

    <p className="text-green-700 font-semibold">What are your customer support hours?</p>
    <p className="mb-4">We’re available Monday to Saturday, 10 AM – 6 PM (IST).</p>
  </section>

  <section>
    <h2 className="font-bold text-base text-black mb-2">Ayurvedic Guidance</h2>

    <p className="text-green-700 font-semibold">Do I need a prescription to use your products?</p>
    <p className="mb-4">No prescription is needed. However, if you have a chronic condition, we advise consulting a qualified practitioner.</p>

    <p className="text-green-700 font-semibold">Can I consult an Ayurvedic expert through your platform?</p>
    <p>We are working on integrating online consultations. Stay tuned to our social channels for updates.</p>
  </section>
</div>

      </main>

      <Footer />
    </>
  );
};

export default FaqPage;
