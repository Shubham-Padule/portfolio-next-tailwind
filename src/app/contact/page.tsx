'use client';

import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form success (replace with real email service later)
    toast.success('Message sent! I’ll get back to you soon 🚀');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-16">
      <h1 className="text-4xl font-bold text-blue-400 mb-10 text-center">Contact Me</h1>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-lg space-y-6 shadow-md">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows="5"
          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition">
          Send Message
        </button>
      </form>

      <ToastContainer position="bottom-right" />
    </div>
  );
}
