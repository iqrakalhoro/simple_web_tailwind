import React from "react";

function ContactPage() {
  return (
    <section className="relative bg-cover bg-center h-screen flex items-center justify-center text-[#330808]">
      <div className="absolute inset-0 bg-[rgba(255,146,146,0.5)] z-10"></div>
      <div className="relative z-20 text-center max-w-[800px] p-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5">Get in Touch</h1>
        <p className="text-lg sm:text-xl mb-6">
          We would love to hear from you! Reach out to us for any questions or to schedule an appointment.
        </p>
        <button className="bg-[#551308] text-white py-3 px-6 text-base sm:text-lg rounded-md transition duration-300 hover:bg-[#f9bfb7]">
          Contact Us
        </button>
      </div>
    </section>
  );
}

export default ContactPage;
