"use client";
import React from "react";
import Nav from "../ui/nav";
import { motion } from "framer-motion";
import { useState } from "react";
export default function Contacts() {
  const [formData, setformData] = useState({
    email: "",
    name: "",
    services: "",
    budget: "",
    timeline: "",
    details: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // For inputs, selects and textareas
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target as
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement;
    setformData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setSubmitStatus("success");
      setformData({
        email: "",
        name: "",
        services: "",
        budget: "",
        timeline: "",
        details: "",
      });
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };
  return (
    <>
      <section className="min-h-[60vh] flex items-center justify-center pt-24 bg-[#edf7f6]">
        <Nav />
        <motion.div
          className="flex flex-col items-center justify-center px-6 text-center p-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="text-5xl font-bold mb-2">Get In Touch</h1>
          <p className=" max-w-md text-xl">
            Ready to start your project? Let&apos;s discuss your requirements
            and create something amazing together.
          </p>
        </motion.div>
      </section>

      <section className="min-h-screen flex justify-center items-center py-12 px-6 bg-[#edf7f6]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
          {/* Left - Form */}
          <motion.div
            className="rounded-2xl border p-6 bg-white shadow-sm"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h1 className="text-2xl font-bold mb-4">Book A Consultation</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Email */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-semibold">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="border rounded px-3 py-2"
                  onChange={handleChange}
                  value={formData.email}
                  required
                />
              </div>

              {/* Name */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-semibold">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  className="border rounded px-3 py-2"
                  onChange={handleChange}
                  value={formData.name}
                  required
                />
              </div>

              {/* Services */}
              <div className="flex flex-col">
                <label htmlFor="services" className="text-sm font-semibold">
                  Services Interested In
                </label>
                <select
                  id="services"
                  name="services"
                  className="border rounded px-3 py-2"
                  onChange={handleChange}
                  value={formData.services}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="software">Software Development</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="consulting">Consulting</option>
                </select>
              </div>

              {/* Budget & Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="budget" className="text-sm font-semibold">
                    Select Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="border rounded px-3 py-2"
                    onChange={handleChange}
                    value={formData.budget}
                    required
                  >
                    <option value="">Select budget</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-5000">$1,000 - $5,000</option>
                    <option value="5000+">$5,000+</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="timeline" className="text-sm font-semibold">
                    Select Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    className="border rounded px-3 py-2"
                    onChange={handleChange}
                    value={formData.timeline}
                    required
                  >
                    <option value="">Select timeline</option>
                    <option value="1month">1 Month</option>
                    <option value="3months">3 Months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col">
                <label htmlFor="details" className="text-sm font-semibold">
                  Project Details
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  placeholder="Describe your project..."
                  className="border rounded px-3 py-2"
                  onChange={handleChange}
                  value={formData.details}
                  required
                />
              </div>

              {/* Submit */}
              {/* Submit */}
              <button
                disabled={isSubmitting}
                className="border rounded py-2 font-semibold hover:bg-[#7c9885] hover:text-white transition disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    Sending
                    <span className="loading-dots">
                      <span>.</span>
                      <span>.</span>
                      <span>.</span>
                    </span>
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
              {submitStatus === "success" && (
                <p className="text-sm text-green-600">
                  Message sent. I will reach out to you shortly.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-sm text-red-600">
                  Failed to send message. Please try again later.
                </p>
              )}
            </form>
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            className="rounded-2xl border p-6 bg-white shadow-sm"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h1 className="text-2xl font-bold mb-4">Contact Information</h1>
            <p className="text-sm mb-6">
              I&apos;m always excited to discuss new projects and opportunities.
              Reach out through any of the channels below, and I&apos;ll get
              back to you promptly.
            </p>

            <div className="space-y-3">
              <div className="border-b pb-2">
                <h2 className="font-semibold">Email</h2>
                <span>ogresmurathimi@gmail.com</span>
              </div>
              <div className="border-b pb-2">
                <h2 className="font-semibold">LinkedIn</h2>
                <a
                  href="https://www.linkedin.com/in/francis-ogres?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline break-all"
                >
                  https://www.linkedin.com/in/francis-ogres
                </a>
              </div>
              <div className="border-b pb-2">
                <h2 className="font-semibold">Phone</h2>
                <span>+254 768 595592</span>
              </div>
              <div className="border-b pb-2">
                <h2 className="font-semibold">Location</h2>
                <span>Available for remote work worldwide</span>
              </div>
              <div className="border-b pb-2">
                <h2 className="font-semibold">Availability</h2>
                <span>Monday - Friday, 9 AM - 6 PM EST</span>
              </div>
              <div className="flex flex-col">
                <h2 className="font-semibold">What to Expect</h2>
                <span>✔ Response within 24 hours</span>
                <span>✔ Free initial consultation call</span>
                <span>✔ Detailed project proposal</span>
                <span>✔ No obligation to proceed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="justify-center py-16 px-6 bg-[#edf7f6]">
        <div className="flex flex-col justify-center items-center max-w-3xl mx-auto gap-8">
          <h1 className="text-2xl font-bold">Frequently Asked Questions</h1>

          <div className="flex flex-col gap-4 w-full">
            <motion.div
              className="border rounded-lg p-4 bg-white shadow-sm"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-lg font-semibold">
                How long does a typical project take?
              </h3>
              <p className="text-sm mt-2 text-gray-700">
                Project timelines vary based on complexity. Simple web
                applications take 2–4 weeks, while comprehensive solutions with
                security features can take 8–16 weeks.
              </p>
            </motion.div>

            <motion.div
              className="border rounded-lg p-4 bg-white shadow-sm"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-lg font-semibold">
                Do you provide ongoing support?
              </h3>
              <p className="text-sm mt-2 text-gray-700">
                Yes, I offer various support packages including bug fixes,
                security updates, feature enhancements, and 24/7 monitoring for
                enterprise clients.
              </p>
            </motion.div>

            <motion.div
              className="border rounded-lg p-4 bg-white shadow-sm"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-lg font-semibold">
                Can you work with my existing development team?
              </h3>
              <p className="text-sm mt-2 text-gray-700">
                Absolutely! I collaborate effectively with existing teams,
                providing specialized security expertise or taking on specific
                development modules as needed.
              </p>
            </motion.div>

            <motion.div
              className="border rounded-lg p-4 bg-white shadow-sm"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-lg font-semibold">
                What industries do you specialize in?
              </h3>
              <p className="text-sm mt-2 text-gray-700">
                I have worked across diverse industries including e-commerce,
                fintech, healthcare, and education—always with a focus on secure
                and scalable solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
