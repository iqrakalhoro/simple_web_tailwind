import React from 'react';

function AboutPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-[rgba(255,146,146,0.5)] z-20 flex flex-col items-center justify-center p-4 sm:p-8">
        <h1
          className="text-center bg-maroon text-beige text-[5vw] sm:text-[4vw] md:text-3xl lg:text-4xl xl:text-5xl font-serif py-2 px-4 sm:py-3 sm:px-6 md:py-4 lg:py-5 mx-auto max-w-[90%] rounded-md"
        >
          Welcome to Iqras Salon
        </h1>
        <p className="mt-4 text-black text-[3vw] sm:text-[2.5vw] md:text-lg lg:text-xl font-sans text-center max-w-[90%] sm:max-w-[80%] md:max-w-[70%]">
          At Iqras Salon, we believe that beauty is more than just skin deep—it's about feeling
          confident and radiant inside and out. Our dedicated team of professionals is here to
          provide a relaxing and rejuvenating experience tailored to your individual needs.
          Whether you're looking for a fresh haircut, a luxurious facial, or a complete makeover, we
          offer a wide range of beauty services to help you look and feel your best.
          <br /><br />
          With years of experience in the industry, Iqras Salon blends expert techniques with the
          latest trends and products to deliver exceptional results. We are committed to creating a
          welcoming environment where every client is treated with the utmost care and attention.
          <br /><br />
          Thank you for choosing Iqras Salon, where beauty meets relaxation.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
