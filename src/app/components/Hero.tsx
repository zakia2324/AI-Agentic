"use client";

import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);

  // Mock AI Response (Aap API se bhi connect kar sakti hain)
  const getAIResponse = async (question: string) => {
    return `Agentic AI ka jawab: ${question}? Ye ek AI chatbot hai jo aapki madad karega!`;
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    const aiResponse = await getAIResponse(input);
    setMessages((prev) => [...prev, { role: "ai", content: aiResponse }]);

    setInput(""); // Input field clear karna
  };

  return (
    <section className="bg-gray-900 text-white py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Agentia  World</h1>
        <p className="text-lg mb-6">AI-powered chatbot jo aapke sawaalon ka jawab de sakta hai.</p>

        {/* AI Chatbot Image */}
        <div className="flex justify-center">
          <Image
            src="/robot.jpg" // AI chatbot ki image (public folder me rakhna)
            alt="Agentic AI Chatbot"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Chat UI */}
        <div className="bg-gray-800 p-4 rounded-lg mt-6 max-w-md mx-auto">
          <div className="h-60 overflow-y-auto mb-4 p-2 border border-gray-700 rounded">
            {messages.map((msg, index) => (
              <p key={index} className={msg.role === "user" ? "text-blue-400 text-right" : "text-green-400 text-left"}>
                {msg.content}
              </p>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Apna sawal likhein..."
              className="flex-grow p-2 rounded bg-gray-700 text-white"
            />
            <button onClick={handleSend} className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">Send</button>
          </div>
        </div>
      </div>
    </section>
  );
}


