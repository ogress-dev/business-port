"use client";
import React from "react";
import Nav from "../ui/nav";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Home() {
  return (
    <>
      <Nav />

      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12 home-bg"
        
      >
        <motion.div
          className="flex flex-col items-center text-center space-y-6 max-w-2xl"
          variants={fadeUp}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold "
            variants={fadeUp}
          >
            OGRES MURATHIMI
          </motion.h1>
          <span className="block text-xs font-normal text-gray-500">
            Founder and CEO: Currenci Technologies
          </span>
          <motion.span
            className="text-lg md:text-xl font-medium tracking-wide"
            variants={fadeUp}
          >
            SOFTWARE ENGINEER | CYBERSECURITY ENTHUSIAST
          </motion.span>
          <motion.p
            className="text-base md:text-lg leading-relaxed"
            variants={fadeUp}
          >
            Building secure, scalable, and modern software solutions. Passionate
            about creating robust applications while ensuring the highest levels
            of cybersecurity.
          </motion.p>
          <motion.div className="flex flex-row gap-4" variants={fadeUp}>
            <Link
              href="/projects"
              className="px-6 py-2 rounded-lg border border-gray-800 font-medium hover:bg-gray-800 hover:text-white transition"
            >
              VIEW MY WORK
            </Link>
            <Link
              href="/contacts"
              className="px-6 py-2 rounded-lg border border-gray-800 font-medium hover:bg-gray-800 hover:text-white transition"
            >
              BOOK CONSULTATION
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        className="py-20 px-10 bg-[#edf7f6] items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full items-center justify-center">
          <motion.div
            className="flex flex-col items-center justify-center space-y-6"
            variants={fadeUp}
          >
            <h1 className="font-bold text-2xl md:text-3xl  leading-snug">
              Crafting Digital Solutions with Security at the Core
            </h1>
            <p className=" text-base leading-relaxed">
              With a unique blend of software development expertise and
              cybersecurity knowledge, I create applications that not only meet
              functional requirements but also uphold the highest security
              standards.
            </p>
            <Link
              href="/about"
              className="w-fit px-6 py-2 rounded-lg border border-gray-800 font-medium hover:bg-gray-800 hover:text-white transition"
            >
              Learn more about me
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
            <motion.div
              className="flex flex-col items-start p-6 rounded-xl border hover:shadow-md transition bg-white shadow-sm"
              variants={fadeUp}
            >
              <h3 className="font-semibold text-lg ">
                Software Development
              </h3>
              <p className="text-sm  mt-2">
                Full-stack development with modern technologies and best
                practices.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col items-start p-6 rounded-xl border bg-white shadow-sm hover:shadow-md transition"
              variants={fadeUp}
            >
              <h3 className="font-semibold text-lg ">
                Cybersecurity
              </h3>
              <p className="text-sm mt-2">
                Security-first approach with thorough testing and vulnerability
                assessment.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="py-20 px-10 bg-[#edf7f6]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="flex flex-col items-center text-center justify-center space-y-8  w-full">
          <motion.h1
            className="text-3xl md:text-4xl font-bold "
            variants={fadeUp}
          >
            My Services
          </motion.h1>
          <motion.p
            className=" text-base md:text-lg max-w-2xl"
            variants={fadeUp}
          >
            Comprehensive solutions covering both software development and
            cybersecurity needs.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <motion.div
              className="flex flex-col p-6 rounded-xl border hover:shadow-md transition space-y-4 text-left bg-white shadow-sm"
              variants={fadeUp}
            >
              <h3 className="text-xl font-semibold ">
                Software Engineering
              </h3>
              <p className="text-sm  leading-relaxed">
                Web & mobile development, API integration, database systems, and
                cloud deployment solutions.
              </p>
              <Link
                href="/services"
               
                className="self-start px-5 py-2 rounded-lg border border-gray-800 text-sm font-medium hover:bg-gray-800 hover:text-white transition "
              >
                Explore Services
              </Link>
            </motion.div>

            <motion.div
              className="flex flex-col p-6 rounded-xl border bg-white shadow-sm hover:shadow-md transition space-y-4 text-left"
              variants={fadeUp}
            >
              <h3 className="text-xl font-semibold ">
                Cybersecurity
              </h3>
              <p className="text-sm  leading-relaxed">
                Security audits, penetration testing, threat analysis, and
                secure system architecture.
              </p>
              <Link
                href="/services"
                className="self-start px-5 py-2 rounded-lg border border-gray-800 text-sm font-medium hover:bg-gray-800 hover:text-white transition"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
