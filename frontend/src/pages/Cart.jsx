import React, { useState } from 'react';
import { FaTrash, FaArrowLeft } from 'react-icons/fa';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import {Link} from 'react-router-dom';
const initialCart = [
  {
    id: 1,
    name: 'Kayacare Capsule - The Natural Blood Detoxifier',
    description: '30 Caps per pack',
    price: 295,
    quantity: 1,
    image: '/images/kayacare.png',
  },
  {
    id: 2,
    name: 'Arogyam Churnaam',
    description: '30 Caps per pack',
    price: 295,
    quantity: 1,
    image: '/images/arogyam.png',
  },
  {
    id: 3,
    name: 'Hotman Capsule - exclusively for Men',
    description: '30 Caps per pack',
    price: 115,
    quantity: 1,
    image: '/images/hotman.png',
  },
];

const CartPage = () => {
  const [cart, setCart] = useState(initialCart);

  const updateQuantity = (id, delta) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = id => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 295;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 p-6 sm:p-12 flex flex-col md:flex-row gap-8 justify-between">
        {/* LEFT - Cart */}
        <div className="flex-1">
<Link to="/shopall">
          <button className="flex items-center text-gray-700 font-semibold mb-6">
            <FaArrowLeft className="mr-2" />
            Shopping Continue
          </button>
          </Link>
          <h2 className="text-2xl font-bold mb-1">Shopping cart</h2>
          <p className="text-sm text-gray-500 mb-6">
            You have {cart.length} item{cart.length > 1 ? 's' : ''} in your cart
          </p>

          <div className="space-y-4">
            {cart.map(item => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-xl p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded" />
                  <div>
                    <p className="font-semibold text-sm">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center border rounded px-2">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span className="px-2">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                  <span className="w-14 text-right font-semibold">
                    ₹{item.price * item.quantity}
                  </span>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - Payment Form */}
        <div className="bg-[#4c6b2f] text-white rounded-xl p-6 w-full md:w-[350px] space-y-4 relative">
          <h2 className="text-lg font-semibold">Card Details</h2>

          <div>
            <p className="text-sm mb-2">Card type</p>
            <div className="flex gap-2">
              <img src="/images/mastercard.png" alt="Mastercard" className="w-10 h-6" />
              <img src="/images/visa.png" alt="Visa" className="w-10 h-6" />
              <img src="/images/rupay.png" alt="RuPay" className="w-10 h-6" />
              <button className="text-sm underline">See all</button>
            </div>
          </div>
<div className="space-y-3 text-white text-sm">
  <div>
    <label htmlFor="name" className="block mb-1">Name on card</label>
    <input
      type="text"
      id="name"
      placeholder="Name on card"
      className="w-full px-3 py-2 rounded bg-[#547C37] placeholder-[#C4C4C4] text-black text-sm"
    />
  </div>
  <div>
    <label htmlFor="cardNumber" className="block mb-1">Card Number</label>
    <input
      type="text"
      id="cardNumber"
      placeholder="Card Number"
      className="w-full px-3 py-2 rounded bg-[#547C37] placeholder-[#C4C4C4] text-black text-sm"
    />
  </div>
  <div className="flex gap-2">
    <div className="w-1/2">
      <label htmlFor="expiry" className="block mb-1">Expiration date</label>
      <input
        type="text"
        id="expiry"
        placeholder="mm/yy"
        className="w-full px-3 py-2 rounded bg-[#547C37] placeholder-[#C4C4C4] text-black text-sm"
      />
    </div>
    <div className="w-1/2">
      <label htmlFor="cvv" className="block mb-1">CVV</label>
      <input
        type="text"
        id="cvv"
        placeholder="123"
        className="w-full px-3 py-2 rounded bg-[#547C37] placeholder-[#C4C4C4] text-black text-sm"
      />
    </div>
  </div>
</div>


          <div className="pt-4 text-sm space-y-1">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>₹{shipping}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total (Tax incl.)</span>
              <span>₹{total}</span>
            </div>
          </div>

          <button className="bg-white text-black w-full rounded-full py-2 font-semibold flex items-center justify-between px-4 mt-4 hover:bg-gray-200">
            ₹{total}
            <span>Checkout →</span>
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
