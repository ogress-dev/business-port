"use client";
import React from "react";
import Image from "next/image";
import Nav from "../ui/nav";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

export default function About() {
  return (
    <>
      <Nav />
      <section className="flex justify-center items-center py-20 px-10 min-h-screen bg-[#edf7f6]"
       >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">
          {/* Left Content */}
          <motion.div className="flex flex-col justify-center space-y-4" variants={fadeUp}>
            <h1 className="text-3xl font-bold ">About Me</h1>
            <p className="text-lg ">
              Passionate <span className="font-semibold">Software Developer</span> &{" "}
              <span className="font-semibold">Cybersecurity Enthusiast</span>
            </p>
            <p className=" leading-relaxed">
              I&apos;m <span className="font-semibold">Ogres Murathimi</span>, a
              dedicated developer with a deep passion for cybersecurity. My
              journey in tech began with a fascination for building digital
              solutions that are not only functional but also secure by design.
            </p>
            <p className=" leading-relaxed">
              With years of experience in full-stack development and security
              assessment, I bring a unique perspective to every project. I
              believe security should be woven into the fabric of every
              application from day one.
            </p>
            <p className=" leading-relaxed">
              My approach combines modern development practices with rigorous
              security protocols—ensuring the solutions I build are innovative,
              robust, and secure.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div className="flex justify-center items-center" variants={fadeUp}>
            <Image src="/samba.jpg" alt="Profile Picture" width={300} height={300} className="rounded-2xl shadow-lg object-cover" />
          </motion.div>
        </div>
      </section>

      <motion.section className="min-h-[50vh] flex items-center justify-center px-10 bg-[#edf7f6]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="flex flex-col items-center text-center space-y-8 max-w-6xl w-full">
           {/* Heading */}
          <motion.div className="space-y-3" variants={fadeUp}>
            <h1 className="text-3xl md:text-4xl font-bold">Technical Expertise</h1>
            <p className="text-base md:text-lg">A comprehensive skill set spanning modern development technologies and cybersecurity practices.</p>
          </motion.div>

           {/* Skills Grid */}
          <motion.div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full" variants={stagger}>
            {
              [
                "React & TypeScript",
                "Node.js & Python",
                "Penetration Testing",
                "Security Audits",
                "Threat Analysis",
                "Secure Coding",
                "Database Design",
                "Mobile Development",
              ].map((skill, index) => (
                <motion.div key={index} className="font-medium py-4 px-6 rounded-xl border bg-white shadow-sm hover:shadow-md hover:border-gray-800 transition text-center" variants={fadeUp}>
                  {skill}
                </motion.div>
              ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section className="min-h-screen flex items-center justify-center px-10 py-20 bg-[#edf7f6]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="flex flex-col items-center text-center space-y-8 max-w-6xl w-full">
           {/* Heading */}
          <motion.div className="space-y-3" variants={fadeUp}>
            <h1 className="text-3xl md:text-4xl font-bold ">Key Achievements</h1>
            <p className=" text-base md:text-lg">Milestones that define my journey in software development and cybersecurity.</p>
          </motion.div>

           {/* Achievements Grid */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full" variants={stagger}>
            {
              [
                { title: "50+ Projects Delivered", desc: "Successfully completed diverse software projects across multiple industries." },
                { title: "Client Satisfaction", desc: "Maintained a 100% client satisfaction rate through quality delivery and support." },
                { title: "Security Expert", desc: "Specialized in building secure applications and conducting security assessments." },
                { title: "Industry Recognition", desc: "Recognized for contributions to secure software development practices." },
              ].map((a, i) => (
                <motion.div key={i} className="flex flex-col p-6 border rounded-xl bg-white shadow-sm hover:shadow-md transition text-left space-y-2" variants={fadeUp}>
                  <h3 className="text-xl font-semibold ">{a.title}</h3>
                  <p className="text-sm ">{a.desc}</p>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section className="min-h-screen flex justify-center items-center p-10 bg-[#edf7f6]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="flex flex-col items-center justify-center gap-10 max-w-5xl">
           <h1 className="text-2xl font-bold text-center">
             My Development Philosophy
           </h1>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
                { title: "Security First", desc: "Every line of code is written with security considerations in mind, ensuring robust protection against evolving threats." },
                { title: "Quality Driven", desc: "Commitment to clean, maintainable code that follows industry best practices and delivers exceptional user experiences." },
                { title: "Innovation Focused", desc: "Staying at the forefront of technology trends while ensuring stability and reliability in all solutions." },
              ].map((p, i) => (
                <motion.div key={i} className="p-6 border rounded-lg bg-white shadow-sm hover:shadow-md transition" variants={fadeUp}>
                  <h2 className="font-semibold text-lg mb-2">{p.title}</h2>
                  <p className="text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
           </div>

           <div className="flex w-full md:w-auto">
             <button
             onClick={() => {
                 window.location.href = "/services";}
             }
             className="px-6 py-3 border rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition w-full md:w-auto">
               Explore My Services
             </button>
           </div>
         </div>
      </motion.section>
    </>
  );
}
         