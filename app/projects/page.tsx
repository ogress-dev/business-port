"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "../ui/nav";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

export default function Projects() {
  return (
    <>
      <motion.section
        className="min-h-[60vh] flex items-center justify-center pt-24 bg-[#edf7f6]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <Nav />
        <motion.div className="flex flex-col items-center justify-center p-8" variants={fadeUp}>
          <h1 className="text-5xl font-bold">Portfolio & Projects</h1>
          <p className="text-xl">Showcasing innovative solutions in software development and cybersecurity</p>
        </motion.div>
      </motion.section>

      <motion.section
        className="min-h-screen flex items-center justify-center py-12 bg-[#edf7f6]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        <div className="flex flex-col items-center justify-center max-w-5xl w-full px-6">
          <motion.div className="text-center mb-10" variants={fadeUp}>
            <h1 className="font-bold text-5xl">Featured Projects</h1>
            <p className="text-xl ">
              Highlighted projects demonstrating expertise in both development and security
            </p>
            <p className="text-xl">Note: Not all projects are displayed here. Some websites are shared only with the consent of their respective owners.</p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-6 w-full">
            {/* Card 1 */}
            <motion.div className="border rounded-2xl shadow-lg bg-white w-full md:w-1/2 overflow-hidden transition" whileHover={{ scale: 1.02 }} variants={fadeUp}>
              <Image src="/apap.png" alt="E-Commerce Platform" className="w-full h-48 object-cover" width={2000} height={1000} />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Business Websites</h3>
                <p className="text-gray-600 mt-2">Provide info about services, products, and contact details.</p>
                <Link href="https://anaellepiovesan.com/collective" className="inline-block mt-4 px-4 py-2 hover:bg-gray-800 hover:text-white transition rounded-lg border">
                  View Project
                </Link>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div className="border rounded-2xl shadow-lg bg-white w-full md:w-1/2 overflow-hidden transition" whileHover={{ scale: 1.02 }} variants={fadeUp}>
              <Image src="/heyhey.png" alt="Portfolio Website" className="w-full h-48 object-cover" width={2000} height={1000} />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Portfolio Website</h3>
                <p className="text-gray-600 mt-2">A sleek portfolio site showcasing work, skills, and services attractively.</p>
                <Link href="https://www.aqutte.co.ke/" className="inline-block mt-4 px-4 py-2 hover:bg-gray-800 hover:text-white transition rounded-lg border">
                  View Project
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}