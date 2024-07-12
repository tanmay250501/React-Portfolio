import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Ensure emailjs is imported
import { Toaster, toast } from 'react-hot-toast'; // Ensure toast and Toaster are imported
import { motion } from 'framer-motion';

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validation = () => {
    let error = {};
    if (!formData.name) error.name = "Name is required";

    if (!formData.email) {
      error.email = "Email is required";
    }
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      error.email = "Email is invalid";
    }
    if (!formData.message) {
      error.message = "Message is required";
    }
    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validation();
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
    }
    else {
      setErrors({});
      setIsSending(true);

      emailjs
        .send(
          "service_vqzinkt",
          "template_ocjd46q",
          formData,
          "hsrOS1IZKZce5AIFh"
        )
        .then((response) => {
          console.log("SUCCESS", response.status, response.text);
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.log("Failed...", error);
          toast.error("Failed to send message. Please try again later");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <div className="mx-auto max-w-xl p-4">
      <Toaster />
      <motion.h2
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className="my-12 text-center text-2xl font-semibold uppercase tracking-wide text-slate-100">
        Get in Touch
      </motion.h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input type="text" name="name" value={formData.name} placeholder="Name" onChange={handleChange} className="w-full appearance-none rounded-lg border border-slate-800 bg-transparent px-3 py-2 focus:border-gray-400 focus:outline-none" />
          {errors.name && (
            <p className="text-sm text-pink-700">{errors.name}</p>
          )}
        </div>

        <div className="mb-4">
          <input type="email" name="email" value={formData.email} placeholder="example@gmail.com" onChange={handleChange} className="w-full appearance-none rounded-lg border border-slate-800 bg-transparent px-3 py-2 focus:border-gray-400 focus:outline-none" />
          {errors.email && (
            <p className="text-sm text-pink-700">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <textarea name="message" value={formData.message} placeholder="Message" onChange={handleChange} className="w-full appearance-none rounded-lg border border-slate-800 bg-transparent px-3 py-2 focus:border-gray-400 focus:outline-none" rows={4} />
          {errors.message && (
            <p className="text-sm text-pink-700">{errors.message}</p>
          )}
        </div>

        <button
          className={`w-full rounded bg-gray-300 py-2 px-4 text-sm font-semibold text-slate-950 hover:text-teal-800 ${isSending ? "cursor-not-allowed opacity-50" : ""}`}
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send"}
        </button>

      </form>
    </div>
  );
};

export default About;
