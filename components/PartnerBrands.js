import React from 'react';

const brands = [
  'ASIAN PAINTS',
  'HAFELE',
  'JAQUAR',
  'GODREJ',
  'SAINT-GOBAIN',
  'KOHLER',
];

const PartnerBrands = () => (
  <section className="bg-gray-100 py-16">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partner Brands</h2>
      <p className="text-gray-600 mb-10 text-lg">
        We collaborate with premium brands to ensure quality and excellence in every project.
      </p>
      <div className="flex flex-wrap justify-center gap-x-20 gap-y-6">
        {brands.map((brand) => (
          <span
            key={brand}
            className="text-lg md:text-xl font-semibold text-gray-400 tracking-wider uppercase"
            style={{ letterSpacing: '0.09em' }}
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default PartnerBrands; 