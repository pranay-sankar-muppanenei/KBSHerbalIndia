import { useState } from "react";

const tabs = [
  "General Terms & User Agreement",
  "Products, Services & Transactions",
  "Legal Rights, Conduct & Liability",
  "Legal Jurisdiction & Contact Info",
];

const tabContent = {
  "General Terms & User Agreement": (
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold">Definitions</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Company / We / Us / Our:</strong> Refers to KBS HERBAL INDIA, including its officers, directors, employees, agents, subsidiaries, and affiliates.</li>
          <li><strong>Website:</strong> Refers to the online platform owned and operated by KBS HERBAL INDIA at [Insert URL] and its subdomains.</li>
          <li><strong>User / You / Your:</strong> Refers to any person accessing or using the Website.</li>
          <li><strong>Products:</strong> Refers to the Ayurveda-based wellness, health, and personal care products sold on the Website.</li>
          <li><strong>Services:</strong> Includes all services provided via the Website such as browsing, ordering, customer support, and promotional activities.</li>
          <li><strong>Applicable Law:</strong> Refers to the laws, rules, and regulations of the Republic of India.</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold">Eligibility</h3>
        <p>You must be at least 18 years old and legally capable of forming a binding contract. If you are representing an organization, you must have authority to bind it to these Terms.</p>
      </div>
      <div>
        <h3 className="font-semibold">Account Creation & Responsibility</h3>
        <p>Users may register or use the site as guests. You are responsible for the accuracy of all information provided and must maintain the confidentiality of your credentials. We may suspend or terminate accounts if false or unauthorized data is found.</p>
      </div>
      <div>
        <h3 className="font-semibold">Communication Consent</h3>
        <p>By using this Website, you consent to receive transactional and promotional communications (SMS/email/calls), even if registered on DND. These may come from us or authorized third parties. You can opt out of promotional messages anytime by writing to [Insert Email].</p>
      </div>
      <div>
        <h3 className="font-semibold">Modifications</h3>
        <p>We may modify these Terms at any time. Continued use of the Website after such changes will constitute your acceptance of those changes.</p>
      </div>
      <div>
        <h3 className="font-semibold">Miscellaneous</h3>
        <p>If any provision is found unenforceable, the rest will still apply. Our failure to enforce any right doesn’t mean we waive it. These Terms may be assigned to affiliates or as part of a sale or merger.</p>
      </div>
    </div>
  ),
  "Products, Services & Transactions": (
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold">Product Use & Bulk Orders</h3>
        <p>All products are primarily for personal use. Bulk orders are allowed, but may be reviewed for approval at our discretion.</p>
      </div>
      <div>
        <h3 className="font-semibold">Product Availability & Pricing</h3>
        <p>Products are listed on an "as available" basis. Prices may change without notice and include applicable taxes unless stated otherwise.</p>
      </div>
      <div>
        <h3 className="font-semibold">Payments</h3>
        <p>We accept UPI, cards, net banking, and COD (may incur additional charges). Online payments are processed via secure third-party gateways.</p>
      </div>
      <div>
        <h3 className="font-semibold">Shipping & Delivery</h3>
        <p>Products are shipped via trusted logistics partners. Delivery times are indicative. We are not liable for delays caused by courier agencies or unforeseen circumstances.</p>
      </div>
      <div>
        <h3 className="font-semibold">Returns & Refunds</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Returns accepted only for damaged, expired, or incorrect items.</li>
          <li>Requests must be initiated within 3 days of delivery.</li>
          <li>Provide photos/videos for return approval.</li>
          <li>No returns accepted for opened, used, or customized items.</li>
          <li>Refunds are processed within 7–10 business days.</li>
        </ul>
      </div>
    </div>
  ),
  "Legal Rights, Conduct & Liability": (
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold">Intellectual Property</h3>
        <p>All content including branding, text, images, and graphics belongs solely to KBS HERBAL INDIA. Unauthorized use or reproduction is strictly prohibited.</p>
      </div>
      <div>
        <h3 className="font-semibold">User Conduct</h3>
        <p>Users agree not to upload harmful content, infringe on IP, or violate any laws. Misuse of the platform will lead to account suspension and possible legal action.</p>
      </div>
      <div>
        <h3 className="font-semibold">Limitation of Liability</h3>
        <p>We are not liable for any indirect or consequential damages, including loss of data or profit. Total liability under any claim shall not exceed ₹200.</p>
      </div>
      <div>
        <h3 className="font-semibold">Indemnification</h3>
        <p>Users agree to indemnify KBS HERBAL INDIA against claims, damages, or losses arising from their use of the Website or violation of these Terms.</p>
      </div>
    </div>
  ),
  "Legal Jurisdiction & Contact Info": (
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold">Governing Law & Jurisdiction</h3>
        <p>These Terms are governed by the laws of India. All disputes shall be subject to the exclusive jurisdiction of courts in Jaipur, Rajasthan. Disputes not resolved amicably will be referred to arbitration in Jaipur under the Arbitration and Conciliation Act, 1996.</p>
      </div>
      <div>
        <h3 className="font-semibold">Contact Us</h3>
        <p>
          KBS HERBAL INDIA<br/>
          Email: <span className="underline">saleskbsherbal@gmail.com</span><br/>
          Phone: 9414090158, 7742206611<br/>
          Address:H.no: 109 Gagan path , Jawahar Nagar ,Sriganganagar, Rajasthan, 335001<br/>
          Website: [GoogllllInsert URL]
        </p>
      </div>
    </div>
  )
};

const TermsTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="rounded-lg border border-[#b7c7ac] border-2 bg-white shadow-md mt-4 mb-4">
      <div className="overflow-auto">
        <div className="rounded-t-lg flex justify-between py-2 md:py-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 whitespace-nowrap px-4 py-3 text-sm md:text-base font-medium border-b-4  transition-all duration-300 ${
                activeTab === tab
                  ? "border-green-600 text-green-700"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4 text-sm md:text-base text-gray-700 space-y-3 p-2 md:p-4">
        {tabContent[activeTab]}
      </div>
    </div>
  );
} 

export default TermsTabs;
