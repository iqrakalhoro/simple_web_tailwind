import React from "react";

function Services() {
  return (
    <div className="relative bg-[rgba(255,146,146,0.5)] py-10 px-4 sm:px-6 lg:px-10 text-[#330808]">
      <h1 className="text-center text-[6vw] sm:text-5xl lg:text-6xl font-serif bg-maroon text-beige py-5 mx-auto max-w-[90%] rounded-md">
        These are my services
      </h1>
      <div className="max-w-[800px] mx-auto mt-8 text-center text-lg sm:text-xl">
        <p className="mb-8 font-sans">
          At Iqras Salon, we provide a comprehensive range of beauty and grooming services designed
          to enhance your natural beauty. Whether you're here for a quick refresh or a complete
          makeover, our skilled professionals are dedicated to ensuring you leave feeling fabulous.
          Explore our services below:
        </p>

        <h2 className="text-maroon font-semibold text-2xl sm:text-3xl mb-4">Hair Care</h2>
        <div className="text-[#7d2534] font-sans">
          <h3 className="font-bold text-lg sm:text-xl mb-2">Haircuts & Styling:</h3>
          <p className="mb-4">
            From trendy cuts to classic styles, we cater to all hair types and lengths. Our expert
            stylists ensure a look that suits your face shape, lifestyle, and preferences.
          </p>
          <h3 className="font-bold text-lg sm:text-xl mb-2">Hair Coloring:</h3>
          <p className="mb-4">
            Whether it's a full color, highlights, balayage, or a bold new hue, our colorists create
            the perfect shade for you.
          </p>
          <h3 className="font-bold text-lg sm:text-xl mb-2">Hair Treatments:</h3>
          <p className="mb-4">
            Revitalize your hair with nourishing treatments like deep conditioning, keratin
            smoothing, and scalp therapy.
          </p>
          <h2 className="text-maroon font-semibold text-2xl sm:text-3xl mb-4">Skin Care</h2>
          <h3 className="font-bold text-lg sm:text-xl mb-2">Facials:</h3>
          <p className="mb-4">
            Tailored facials to cleanse, exfoliate, and nourish your skin, leaving you with a
            radiant glow.
          </p>

          <h2 className="text-maroon font-semibold text-2xl sm:text-3xl mb-4">Massage & Relaxation</h2>
          <h3 className="font-bold text-lg sm:text-xl mb-2">Swedish Massage:</h3>
          <p className="mb-4">
            A soothing massage designed to reduce stress and promote relaxation.
          </p>

        </div>
      </div>
    </div>
  );
}

export default Services;
