// import { useState } from "react";

// function ChatWindow() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSend = async () => {
//     if (!input.trim()) return;

//     const userMessage = { sender: "user", text: input };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");
//     setLoading(true);

//     try {
//       const res = await fetch("http://localhost:8000/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message: input }),
//       });
//       const data = await res.json();
//       const botMessage = { sender: "bot", text: data.response };
//       setMessages((prev) => [...prev, botMessage]);
//     } catch (error) {
//       setMessages((prev) => [
//         ...prev,
//         { sender: "bot", text: "Something went wrong." },
//       ]);
//     }

//     setLoading(false);
//   };

//   return (

//     <div className="max-w-xl mx-auto mt-10 p-4 bg-white shadow-xl rounded-2xl">
//       <h1 className="text-xl font-bold mb-4">🎓 AI Assistant for the Student of (JAMIA HAMDARD UNIVERSITY) </h1>
//       <div className="h-96 overflow-y-auto mb-4 border rounded p-2 bg-gray-50">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`mb-2 p-2 rounded-lg ${
//               msg.sender === "user"
//                 ? "bg-blue-100 text-right"
//                 : "bg-green-100 text-left"
//             }`}
//           >
//             {msg.text}
//           </div>
//         ))}
//         {loading && <p className="italic text-gray-500">Bot is typing...</p>}
//       </div>
//       <div className="flex gap-2">
//         <input
//           className="flex-1 border p-2 rounded"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && handleSend()}
//           placeholder="Ask something like: 'When is the exam?'"
//         />
//         <button
//           onClick={handleSend}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ChatWindow;

import { useState } from "react";

function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      const botMessage = { sender: "bot", text: data.response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Something went wrong." },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-blue-400 shadow-xl rounded-2xl">
      
      {/* 👤 Profile Section */}
      <div className="flex items-center gap-4 mb-4 border-b pb-3 border-gray-300">
        <img
          src="/raj.jpg"
          alt="Raj Khan"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-semibold">Yunus Khan</h2>
          <p className="text-sm text-gray-600">Student Support Chatbot</p>
        </div>
      </div>

      {/* 💬 Chat Title */}
      <h1 className="text-lg font-bold mb-3 text-center">
        🎓 AI Assistant for the Students of Jamia Hamdard University
      </h1>

      {/* 📩 Message Area */}
      <div className="h-96 overflow-y-auto mb-4 border rounded p-2 bg-blue-200">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded-lg ${
              msg.sender === "user"
                ? "bg-blue-300 text-right"
                : "bg-green-100 text-left"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && <p className="italic text-gray-500">Bot is typing...</p>}
      </div>

      {/* 🧾 Input Box */}
      <div className="flex gap-2">
        <input
          className="flex-1 border p-2 rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Ask something like: 'When is the exam?'"
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatWindow;
