import { useState } from "react";

const tabs = [
  'Shipping & Exchange Policy',
  'Cancellation & Refund Policy',
]

const tabContent = {
  "Shipping & Exchange Policy": (
  <div className="space-y-6">
    <h3 className="font-semibold text-lg">Shipping & Exchange Policy</h3>
    <p>
      At <span className="font-medium">KBS HERBAL INDIA</span>, we ensure timely and secure delivery through trusted courier partners.
    </p>

    <div className="space-y-2">
      <h4 className="font-semibold">Shipping Policy</h4>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li><strong>Order Processing:</strong> Orders are processed immediately and packed with care.</li>
        <li><strong>Dispatch Timeline:</strong> Orders are shipped within 48 hours of processing.</li>
        <li><strong>Delivery Timeline:</strong> Products typically arrive within 6–8 working days.</li>
      </ul>
      <p className="text-sm text-gray-600">Note: While we aim for prompt delivery, delays may occur due to unforeseen circumstances.</p>
    </div>

    <div className="space-y-2">
      <h4 className="font-semibold">In Case of Wrong/Damaged/Missing Product</h4>
      <p>While errors are rare, we’re committed to quick resolution if they occur.</p>

      <h5 className="font-semibold mt-2">Exchange Guidelines</h5>
      <ul className="list-disc pl-6 space-y-2 text-sm">
        <li>
          <strong>Wrong Product Received:</strong><br />
          - Unused, unopened, and saleable<br />
          - Unboxing video mandatory<br />
          - Must be reported within 2 days
        </li>
        <li>
          <strong>Damaged Product:</strong><br />
          - Retain item and share clear images<br />
          - Unboxing video mandatory<br />
          - Must be reported within 2 days
        </li>
        <li>
          <strong>Missing Product:</strong><br />
          - Report within 2 days with an unboxing video
        </li>
        <li>
          <strong>Customer Error:</strong><br />
          - ₹400 exchange fee applies (pickup & redelivery)<br />
          - Contact via Instagram DM, WhatsApp, Email, or Phone within 2 days
        </li>
      </ul>
      <p className="text-sm text-red-600 font-medium">Note: Refunds are not provided once goods are sold.</p>
    </div>
  </div>
)
,
"Cancellation & Refund Policy": (
  <div className="space-y-6">
    <h3 className="font-semibold text-lg">Cancellation & Refund Policy</h3>

    <div className="space-y-2">
      <h4 className="font-semibold">Order Cancellation</h4>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Cancel within 24 hours or before shipping label generation.</li>
        <li>Once labeled or picked up, cancellation is not possible.</li>
        <li>Prepaid orders are processed instantly and cannot be canceled post-confirmation.</li>
        <li>Delivered orders are not eligible for cancellation or return.</li>
      </ul>
    </div>

    <div className="space-y-2">
      <h4 className="font-semibold">Refund Policy for Prepaid Orders</h4>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li><strong>Courier Delivery Failure:</strong> We reship at no cost or issue a coupon of equal value.</li>
        <li><strong>Customer Refuses Delivery:</strong> ₹300 shipping fee will be deducted from the refund.</li>
      </ul>
    </div>

    <div className="space-y-2">
      <h4 className="font-semibold">Refund Timeline</h4>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Initiated within 6–8 business days post gateway confirmation.</li>
        <li>Credited to the original payment method (allow 5–10 extra days for banks).</li>
        <li>A Refund ID or Transaction ID will be provided for your reference.</li>
      </ul>
      <p className="text-sm text-gray-600">For delays, please contact your bank directly.</p>
    </div>
  </div>
)
};
const ShippingTableComponent = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="rounded-lg border border-[#b7c7ac] border-2 bg-white shadow-md mt-4 mb-4">
      <div className="rounded-t-lg flex justify-between py-2 md:py-4">
        {tabs.map((tab) => (
          <button
            key={tab}
             className={`flex-1  px-4 py-3 text-sm md:text-base font-medium border-b-4  transition-all duration-300 ${
                activeTab === tab
                  ? "border-green-600 text-green-700"
                  : "text-gray-600 hover:text-black"
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-6">
        {tabContent[activeTab]}
      </div>
    </div>
  );
};

export default ShippingTableComponent;