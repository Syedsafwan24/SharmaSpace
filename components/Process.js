"use client";

import React from "react";
import { motion } from "framer-motion";

const ProcessStep = ({ index, children, from = "left" }) => {
  const direction = from === "left" ? -100 : 100;
  return (
    <motion.div
      className="flex items-center mb-2 relative"
      initial={{ opacity: 0, x: direction }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

const Process = () => {
  return (
    <section className="bg-[#fff8f8] py-20 px-4 relative overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-20">
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-4"
          style={{ color: "#E63946" }}
        >
          Our Creative Process
        </h2>
        <p className="text-lg md:text-xl text-gray-600">
          A streamlined approach to transform your vision into reality
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Central Line */}
        <div
          className="absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-0.5 z-10"
          style={{ backgroundColor: "#E63946" }}
        />

        {/* Step 1 */}
        <ProcessStep from="left">
          <div className="w-1/2 pr-16 flex justify-end">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 relative w-80">
              <div
                className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                style={{ backgroundColor: "#E63946" }}
              >
                01
              </div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "#1C1C1C" }}
              >
                Consultation
              </h3>
              <p className="text-gray-600 text-base">
                We understand your vision and requirements.
              </p>
            </div>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
            <div
              className="w-12 h-12 bg-white border-2 rounded-full flex items-center justify-center shadow-lg"
              style={{ borderColor: "#E63946" }}
            >
              💬
            </div>
          </div>
          <div className="w-1/2 pl-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 w-80 h-60 flex items-center justify-center">
              <div className="flex items-end space-x-3">
                <div
                  className="w-6 h-16 rounded-t"
                  style={{ backgroundColor: "#7FB3D3" }}
                />
                <div
                  className="w-6 h-24 rounded-t"
                  style={{ backgroundColor: "#5F9ACF" }}
                />
                <div
                  className="w-6 h-12 rounded-t"
                  style={{ backgroundColor: "#7FB3D3" }}
                />
                <div
                  className="w-6 h-20 rounded-t"
                  style={{ backgroundColor: "#5F9ACF" }}
                />
              </div>
            </div>
          </div>
        </ProcessStep>

        {/* Step 2 */}
        <ProcessStep from="right">
          <div className="w-1/2 pr-16 flex justify-end">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 w-80 h-60 flex items-center justify-center">
              <div className="bg-gray-200 w-40 h-28 rounded-lg relative">
                <div className="absolute top-2 left-2 flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
            <div
              className="w-12 h-12 bg-white border-2 rounded-full flex items-center justify-center shadow-lg"
              style={{ borderColor: "#E63946" }}
            >
              🎨
            </div>
          </div>
          <div className="w-1/2 pl-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 relative w-80">
              <div
                className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                style={{ backgroundColor: "#E63946" }}
              >
                02
              </div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "#1C1C1C" }}
              >
                Design
              </h3>
              <p className="text-gray-600 text-base">
                Our team creates customized design concepts.
              </p>
            </div>
          </div>
        </ProcessStep>

        {/* Step 3 */}
        <ProcessStep from="left">
          <div className="w-1/2 pr-16 flex justify-end">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 relative w-80">
              <div
                className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                style={{ backgroundColor: "#E63946" }}
              >
                03
              </div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "#1C1C1C" }}
              >
                Execution
              </h3>
              <p className="text-gray-600 text-base">
                We bring the design to life with precision.
              </p>
            </div>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
            <div
              className="w-12 h-12 bg-white border-2 rounded-full flex items-center justify-center shadow-lg"
              style={{ borderColor: "#E63946" }}
            >
              🛠️
            </div>
          </div>
          <div className="w-1/2 pl-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 w-80 h-60 flex items-center justify-center">
              <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
                <div className="bg-white rounded w-32 h-20 p-3 border border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-2 w-full rounded bg-blue-400" />
                    <div className="h-2 w-3/4 rounded bg-purple-500" />
                    <div className="h-2 w-1/2 rounded bg-green-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ProcessStep>

        {/* Step 4 */}
        <ProcessStep from="right">
          <div className="w-1/2 pr-16 flex justify-end">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 w-80 h-60 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-2">
                <div className="w-8 h-4 rounded bg-blue-300" />
                <div className="w-4 h-4 rounded-full bg-yellow-400" />
                <div className="w-8 h-4 rounded bg-green-500" />
                <div className="w-4 h-4 rounded-full bg-red-500" />
                <div className="w-4 h-4 rounded-full col-span-2 bg-blue-300" />
              </div>
            </div>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
            <div
              className="w-12 h-12 bg-white border-2 rounded-full flex items-center justify-center shadow-lg"
              style={{ borderColor: "#E63946" }}
            >
              🎁
            </div>
          </div>
          <div className="w-1/2 pl-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 relative w-80">
              <div
                className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                style={{ backgroundColor: "#E63946" }}
              >
                04
              </div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "#1C1C1C" }}
              >
                Handover
              </h3>
              <p className="text-gray-600 text-base">
                Your dream space is ready to enjoy!
              </p>
            </div>
          </div>
        </ProcessStep>
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-32">
        <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100 text-center max-w-lg mx-auto">
          <h3 className="text-2xl font-bold mb-4" style={{ color: "#1C1C1C" }}>
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-600 mb-6">
            Let's bring your vision to life together.
          </p>
          <button
            className="px-8 py-3 font-semibold rounded-lg text-white shadow-lg transition-transform transform hover:scale-105"
            style={{
              background: "linear-gradient(135deg,#E63946 0%,#D62828 100%)",
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
