import React, { useState, useRef, useEffect } from "react";
import { IoClose, IoSend } from "react-icons/io5";
import { BsChatDotsFill } from "react-icons/bs";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setInput("");

    setMessages((prev) => [...prev, userMessage]);

    // Simulated AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "This is a sample AI response.", sender: "ai" },
      ]);
    }, 500);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-600 p-3 rounded-full shadow-lg hover:bg-green-700"
        >
          <BsChatDotsFill className="text-white text-xl" />
        </button>
      )}

      {isOpen && (
        <div className="w-80 sm:w-96 h-[500px] bg-white rounded-xl shadow-2xl border flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between bg-green-700 text-white p-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white p-1">
                <img
                  src="/bot-icon.png"
                  alt="bot"
                  className="w-full h-full rounded-full"
                />
              </div>
              <div>
                <h2 className="text-sm font-semibold leading-tight">
                  KBS Herbal
                </h2>
                <p className="text-xs">AI Assistant</p>
              </div>
            </div>
            <IoClose
              onClick={() => setIsOpen(false)}
              className="cursor-pointer text-lg"
            />
          </div>

          {/* Messages */}
          <div
            ref={chatRef}
            className="flex-1 px-3 py-2 overflow-y-auto space-y-2 bg-gray-100 text-sm"
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-2 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {/* AI avatar */}
                {msg.sender === "ai" && (
                  <img
                    src="/bot-icon.png"
                    alt="AI"
                    className="w-6 h-6 rounded-full mt-1"
                  />
                )}
                <div
                  className={`max-w-[75%] px-3 py-2 rounded-lg whitespace-pre-wrap ${
                    msg.sender === "user"
                      ? "bg-green-500 text-white"
                      : "bg-green-200 text-black"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center p-3 border-t">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Enter your message..."
              className="flex-1 px-3 py-2 border rounded-l-md text-sm focus:outline-none"
            />
            <button
              onClick={handleSend}
              className="bg-green-600 px-4 py-2 rounded-r-md text-white hover:bg-green-700"
            >
              <IoSend />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
