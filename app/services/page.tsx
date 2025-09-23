"use client";
import React from "react";
import Nav from "../ui/nav";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Services() {
  const [activeTab, setActiveTab] = useState("engineering");
  const [loadingCard, setLoadingCard] = useState<string | null>(null);
  const cardVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  async function sendPackageRequest(
    packageName: string,
    price: string,
    cardId: string
  ) {
    const clickId =
      typeof crypto !== "undefined" && (crypto as Crypto).randomUUID
        ? (crypto as Crypto).randomUUID()
        : `${Date.now()}-${Math.floor(Math.random() * 1e6)}`;

    try {
      setLoadingCard(cardId);
      const payload = {
        name: "Get Started Click",
        email: "noreply@ogrestech.local",
        services: packageName,
        budget: price,
        timeline: "",
        details: `User clicked Get Started for ${packageName} (${price})`,
        cardId,
        clickId,
        timestamp: new Date().toISOString(),
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json().catch(() => ({}));

      if (res.ok) {
        alert(`Request sent: ${packageName} — you will receive an email.`);
      } else {
        console.error("API error", json);
        alert("Failed to send request. Check console for details.");
      }
    } catch (err) {
      console.error(err);
      alert("Unexpected error sending request.");
    } finally {
      setLoadingCard(null);
    }
  }

  return (
    <>
      {/* Top hero section: use min-height, make it a flex container, use Tailwind bg and add top padding */}
      <section className="min-h-[60vh] flex items-center justify-center pt-24 bg-[#edf7f6]">
        <Nav />
        <motion.div
          className="flex flex-col items-center justify-center p-8"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
        >
          <h1 className="text-5xl font-bold">Professional Services</h1>
          <p className="text-xl">
            Comprehensive software development and cybersecurity solutions
            tailored to your needs
          </p>
        </motion.div>
      </section>

      {/* Services listing: use min-h-screen so content pushes page height instead of forcing overlap */}
      <section className="min-h-screen flex flex-col items-center justify-center py-16 px-6 bg-[#edf7f6]">
        <h1 className="text-5xl font-bold mb-6">My Services</h1>
        <div className="flex gap-4 mb-8">
          <button
            className={`px-4 py-2 rounded-lg font-semibold ${
              activeTab === "engineering" ? "bg-blue-600 text-white" : "bg-white border"
            }`}
            onClick={() => setActiveTab("engineering")}
          >
            Software Engineering
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-semibold ${
              activeTab === "cybersecurity" ? "bg-blue-600 text-white" : "bg-white border"
            }`}
            onClick={() => setActiveTab("cybersecurity")}
          >
            Cybersecurity
          </button>
        </div>

        {/* Software Engineering */}
        {activeTab === "engineering" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
            {/* Web Development */}
            <motion.div
              className="p-6 bg-white shadow rounded-xl flex flex-col justify-between"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div>
                <h3 className="font-bold text-xl">Web Development</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Modern, responsive web applications using React, TypeScript,
                  and cutting-edge frameworks.
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Single Page Applications</li>
                  <li>Progressive Web Apps</li>
                  <li>E-commerce Solutions</li>
                  <li>Custom Web Platforms</li>
                </ul>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="font-semibold text-blue-600">Starting at $700</span>
                <button
                  onClick={() => sendPackageRequest("Web Development", "$700", "web-development")}
                  disabled={loadingCard === "web-development"}
                  className="text-sm font-semibold border px-3 py-1 rounded border-gray-800 hover:bg-gray-800 hover:text-white transition"
                >
                  {loadingCard === "web-development" ? "Sending..." : "Get Quote"}
                </button>
              </div>
            </motion.div>

            {/* Mobile Development */}
            <motion.div
              className="p-6 bg-white shadow rounded-xl flex flex-col justify-between"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div>
                <h3 className="font-bold text-xl">Mobile Development</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Cross-platform mobile apps with seamless UI and performance.
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>iOS & Android Apps</li>
                  <li>React Native Development</li>
                  <li>API Integration</li>
                  <li>App Store Deployment</li>
                </ul>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="font-semibold text-blue-600">Starting at $1,000</span>
                <button
                  onClick={() => sendPackageRequest("Mobile Development", "$1,000", "mobile-development")}
                  disabled={loadingCard === "mobile-development"}
                  className="text-sm font-semibold border px-3 py-1 rounded border-gray-800 hover:bg-gray-800 hover:text-white transition"
                >
                  {loadingCard === "mobile-development" ? "Sending..." : "Get Quote"}
                </button>
              </div>
            </motion.div>

            {/* Cloud & Database Solutions */}
            <motion.div
              className="p-6 bg-white shadow rounded-xl flex flex-col justify-between"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div>
                <h3 className="font-bold text-xl">Cloud & Database Solutions</h3>
                <p className="text-sm text-gray-600 mb-2">Scalable infrastructure for modern applications.</p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Database Design & Optimization</li>
                  <li>Cloud Deployment (AWS, Azure, GCP)</li>
                  <li>Serverless Solutions</li>
                  <li>Backup & Recovery</li>
                </ul>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="font-semibold text-blue-600">Starting at $700</span>
                <button
                  onClick={() => sendPackageRequest("Cloud & Database Solutions", "$700", "cloud-database")}
                  disabled={loadingCard === "cloud-database"}
                  className="text-sm font-semibold border px-3 py-1 rounded border-gray-800 hover:bg-gray-800 hover:text-white transition"
                >
                  {loadingCard === "cloud-database" ? "Sending..." : "Get Quote"}
                </button>
              </div>
            </motion.div>

            {/* API Development */}
            <motion.div
              className="p-6 bg-white shadow rounded-xl flex flex-col justify-between"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div>
                <h3 className="font-bold text-xl">API Development</h3>
                <p className="text-sm text-gray-600 mb-2">Secure and scalable APIs for seamless integrations.</p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>REST & GraphQL APIs</li>
                  <li>Authentication & Authorization</li>
                  <li>3rd-Party Integrations</li>
                  <li>Real-time Data APIs</li>
                </ul>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="font-semibold text-blue-600">Starting at $800</span>
                <button
                  onClick={() => sendPackageRequest("API Development", "$800", "api-development")}
                  disabled={loadingCard === "api-development"}
                  className="text-sm font-semibold border px-3 py-1 rounded border-gray-800 hover:bg-gray-800 hover:text-white transition"
                >
                  {loadingCard === "api-development" ? "Sending..." : "Get Quote"}
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {/* Cybersecurity */}
        {activeTab === "cybersecurity" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
            {/* Security Audits */}
            <motion.div
              className="p-6 bg-white shadow rounded-xl flex flex-col justify-between"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div>
                <h3 className="font-bold text-xl">Security Audits</h3>
                <p className="text-sm text-gray-600 mb-2">Comprehensive assessments of your systems and applications.</p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Infrastructure Audits</li>
                  <li>Application Security Reviews</li>
                  <li>Compliance Checks</li>
                  <li>Risk Assessments</li>
                </ul>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="font-semibold text-blue-600">Starting at $1,800</span>
                <button
                  onClick={() => sendPackageRequest("Security Audits", "$1,800", "security-audits")}
                  disabled={loadingCard === "security-audits"}
                  className="text-sm font-semibold border px-3 py-1 rounded border-gray-800 hover:bg-gray-800 hover:text-white transition"
                >
                  {loadingCard === "security-audits" ? "Sending..." : "Get Quote"}
                </button>
              </div>
            </motion.div>

            {/* Penetration Testing */}
            <motion.div
              className="p-6 bg-white shadow rounded-xl flex flex-col justify-between"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div>
                <h3 className="font-bold text-xl">Penetration Testing</h3>
                <p className="text-sm text-gray-600 mb-2">Real-world attack simulations to uncover vulnerabilities.</p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Web Application Testing</li>
                  <li>Mobile App Testing</li>
                  <li>Network Penetration Testing</li>
                  <li>Exploit Simulation</li>
                </ul>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="font-semibold text-blue-600">Starting at $1,100</span>
                <button
                  onClick={() => sendPackageRequest("Penetration Testing", "$1,100", "penetration-testing")}
                  disabled={loadingCard === "penetration-testing"}
                  className="text-sm font-semibold border px-3 py-1 rounded border-gray-800 hover:bg-gray-800 hover:text-white transition"
                >
                  {loadingCard === "penetration-testing" ? "Sending..." : "Get Quote"}
                </button>
              </div>
            </motion.div>

            {/* Threat Analysis */}
            <motion.div
              className="p-6 bg-white shadow rounded-xl flex flex-col justify-between"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div>
                <h3 className="font-bold text-xl">Threat Analysis</h3>
                <p className="text-sm text-gray-600 mb-2">Identify and mitigate risks before they impact your systems.</p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Threat Intelligence Gathering</li>
                  <li>Vulnerability Scanning</li>
                  <li>Incident Response Planning</li>
                  <li>Continuous Monitoring</li>
                </ul>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="font-semibold text-blue-600">Starting at $890</span>
                <button
                  onClick={() => sendPackageRequest("Threat Analysis", "$890", "threat-analysis")}
                  disabled={loadingCard === "threat-analysis"}
                  className="text-sm font-semibold border px-3 py-1 rounded border-gray-800 hover:bg-gray-800 hover:text-white transition"
                >
                  {loadingCard === "threat-analysis" ? "Sending..." : "Get Quote"}
                </button>
              </div>
            </motion.div>

            {/* Secure Architecture */}
            <motion.div
              className="p-6 bg-white shadow rounded-xl flex flex-col justify-between"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div>
                <h3 className="font-bold text-xl">Secure Architecture</h3>
                <p className="text-sm text-gray-600 mb-2">Designing systems with security built in from the ground up.</p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Zero-Trust Architecture</li>
                  <li>Secure Coding Practices</li>
                  <li>Encryption & Data Protection</li>
                  <li>DevSecOps Integration</li>
                </ul>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="font-semibold text-blue-600">Starting at $1,000</span>
                <button
                  onClick={() => sendPackageRequest("Secure Architecture", "$1,000", "secure-architecture")}
                  disabled={loadingCard === "secure-architecture"}
                  className="text-sm font-semibold border px-3 py-1 rounded border-gray-800  hover:bg-gray-800 hover:text-white transition"
                >
                  {loadingCard === "secure-architecture" ? "Sending..." : "Get Quote"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </section>

      {/* Pricing section: already uses min-h-screen, keep spacing consistent */}
      <section className="flex items-center justify-center min-h-screen bg-[#edf7f6] px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {/* Startup Package */}
          <motion.div
            className="bg-white rounded-2xl shadow-md p-8 flex flex-col"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-bold">Startup Package</h2>
            <p className="text-3xl font-extrabold mt-2">$700</p>
            <p className="text-sm text-gray-500">2–4 weeks</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li> Full-stack web application</li>
              <li> Responsive design</li>
              <li> Basic security implementation</li>
              <li> Database setup</li>
              <li> Cloud deployment</li>
              <li> 2 rounds of revisions</li>
            </ul>
            <button
              onClick={() => sendPackageRequest("Startup Package", "$700", "startup-package")}
              disabled={loadingCard === "startup-package"}
              className="mt-6 border rounded-lg py-2 px-4 font-semibold hover:bg-gray-100"
            >
              {loadingCard === "startup-package" ? "Sending..." : "Get Started →"}
            </button>
          </motion.div>

          {/* Business Package */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col border-2 border-blue-500 relative"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
              Most Popular
            </span>
            <h2 className="text-xl font-bold">Business Package</h2>
            <p className="text-3xl font-extrabold mt-2">$1,000</p>
            <p className="text-sm text-gray-500">6–10 weeks</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li> Everything in Startup</li>
              <li> Mobile application</li>
              <li> Advanced security features</li>
              <li> Payment integration</li>
              <li> Admin dashboard</li>
              <li> Security audit</li>
              <li> 6 months support</li>
            </ul>
            <button
              onClick={() => sendPackageRequest("Business Package", "$1,000", "business-package")}
              disabled={loadingCard === "business-package"}
              className="mt-6 bg-blue-500 text-white rounded-lg py-2 px-4 font-semibold hover:bg-blue-600 transition"
            >
              {loadingCard === "business-package" ? "Sending..." : "Get Started →"}
            </button>
          </motion.div>

          {/* Enterprise Package */}
          <motion.div
            className="bg-white rounded-2xl shadow-md p-8 flex flex-col"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-bold">Enterprise Package</h2>
            <p className="text-3xl font-extrabold mt-2">Custom Quote</p>
            <p className="text-sm text-gray-500">12+ weeks</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li> Everything in Business</li>
              <li> Custom architecture</li>
              <li> Microservices design</li>
              <li> Comprehensive security suite</li>
              <li> Penetration testing</li>
              <li> 24/7 monitoring</li>
              <li> 1 year support & maintenance</li>
            </ul>
            <button
              onClick={() => sendPackageRequest("Enterprise Package", "Custom Quote", "enterprise-package")}
              disabled={loadingCard === "enterprise-package"}
              className="mt-6 border rounded-lg py-2 px-4 font-semibold hover:bg-gray-100"
            >
              {loadingCard === "enterprise-package" ? "Sending..." : "Get Started →"}
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA footer: switch to min-height and add vertical padding instead of fixed h-[50vh] */}
      <section className="flex min-h-[50vh] items-center justify-center py-16 bg-[#edf7f6]">
        <div className="flex flex-col items-center justify-center gap-4 text-center px-6">
          <h1 className="text-2xl font-bold">Ready to Start Your Project?</h1>
          <p className="text-sm text-gray-700 max-w-md">
            Let&apos;s discuss your requirements and create a custom solution
            that meets your specific needs.
          </p>
          <div className="flex gap-5">
            <button 
            onClick={() => {
                 window.location.href = "/contacts";}
             }
            className="border px-4 py-2 rounded border-gray-800 font-medium hover:bg-gray-800 hover:text-white transition">Book a Consultation</button>
            <button 
            onClick={() => {
                 window.location.href = "/home";}
             }
            className="border px-4 py-2 rounded border-gray-800 font-medium hover:bg-gray-800 hover:text-white transition">View Portfolio</button>
          </div>
        </div>
      </section>
    </>
  );
}
