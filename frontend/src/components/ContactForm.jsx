import { useState } from "react";
import axios from "axios";

function ContactForm({ fetchContacts }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/contacts", form);
    setForm({ name: "", email: "", phone: "", message: "" });
    fetchContacts();
  };

  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-lg animate-fade">
      <h2 className="text-xl font-semibold mb-4">Add Contact</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 border border-gray-700"
        />

        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 border border-gray-700"
        />

        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 border border-gray-700"
        />

        <button
          disabled={!form.name || !form.phone}
          className="w-full bg-blue-600 hover:bg-blue-700 transition-all p-2 rounded font-semibold disabled:opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
