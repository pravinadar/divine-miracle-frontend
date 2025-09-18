'use client'
import React, { useState } from 'react';
import { ServiceCardGallery } from '@/components/ServiceCardGallery.jsx';

// Filter Button Component
const FilterButton = ({ category, label, activeFilter, onFilterChange }) => {
  const isActive = activeFilter === category;
  
  return (
    <button
      onClick={() => onFilterChange(category)}
      className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
        isActive
          ? 'bg-gradient-to-r from-[#d4af37] via-[#ffd700] to-[#b8860b] text-[#3a0d1e]'
          : 'text-yellow-200 hover:text-yellow-400 hover:bg-yellow-400/10 border border-yellow-400/20 hover:border-yellow-400/40'
      }`}
    >
      {label}
    </button>
  );
};

// Main Sacred Gallery Component
const SacredGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Gallery data matching the structure in the image
  const galleryData = [
    {
      id: 1,
      title: "Tarot Card Spread",
      category: "TAROT READING",
      description: "A beautiful Celtic cross spread revealing life's sacred wisdom and divine guidance.",
      filterCategory: "tarot"
    },
    {
      id: 2,
      title: "Healing Crystals",
      category: "ANGEL HEALING",
      description: "Sacred crystals used in healing sessions to restore energy and spiritual balance.",
      filterCategory: "angel"
    },
    {
      id: 3,
      title: "Astrology Chart",
      category: "ASTROLOGY",
      description: "Detailed birth chart analysis and planetary alignments for cosmic guidance.",
      filterCategory: "astrology"
    },
    {
      id: 4,
      title: "Sacred Space",
      category: "VASTU",
      description: "Harmonious living space designed with Vastu principles for positive energy.",
      filterCategory: "vastu"
    },
    {
      id: 5,
      title: "Healing Grid",
      category: "NUMEROLOGY",
      description: "Personal numerology calculations and life path number revelations.",
      filterCategory: "numerology"
    },
    {
      id: 6,
      title: "Herbal Spells",
      category: "HERBAL SPELLS",
      description: "Traditional herbs prepared for healing and magical transformation rituals.",
      filterCategory: "herbal"
    },
    {
      id: 7,
      title: "Meditation Corner",
      category: "SPIRITUAL GRACE",
      description: "Peaceful meditation area for spiritual practice and inner peace cultivation.",
      filterCategory: "spiritual"
    },
    {
      id: 8,
      title: "Angel Cards",
      category: "ANGEL READING",
      description: "Divine guidance through angelic card readings and celestial messages.",
      filterCategory: "angel"
    }
  ];

  // Filter categories
  const filterCategories = [
    { category: 'all', label: 'All' },
    { category: 'tarot', label: 'Tarot Reading' },
    { category: 'angel', label: 'Angel Healing' },
    { category: 'astrology', label: 'Astrology' },
    { category: 'vastu', label: 'Vastu' },
    { category: 'numerology', label: 'Numerology' },
    { category: 'herbal', label: 'Herbal Spells' }
  ];

  // Filter gallery data
  const filteredData = activeFilter === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.filterCategory === activeFilter);

  // Handle filter change
  const handleFilterChange = (category) => {
    setActiveFilter(category);
  };

  return (
    <div className="bg-gradient-to-br from-[#1a0009] via-[#2a0015] to-[#1a0009] min-h-screen">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center pt-16 pb-12 px-4 mt-5">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 text-transparent bg-clip-text mb-3 pb-5">
          Sacred Gallery
        </h1>
        <p className="text-yellow-200 text-xl max-w-3xl mx-auto leading-relaxed">
          Explore the mystical world of spiritual practices through our curated collection of sacred tools, healing spaces, and divine moments.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="max-w-[90%] mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {filterCategories.map(({ category, label }) => (
            <FilterButton
              key={category}
              category={category}
              label={label}
              activeFilter={activeFilter}
              onFilterChange={handleFilterChange}
            />
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-[90%] mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredData.map((item, index) => (
            <div
              key={item.id}
              className="opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCardGallery {...item} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="max-w-4xl mx-auto text-center py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 text-transparent bg-clip-text mb-4">
          Experience the Sacred
        </h2>
        <p className="text-yellow-200 text-lg mb-8 leading-relaxed">
          Ready to create your own spiritual experience? Book a session and begin your transformative journey with Dr. Jinal K.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-gradient-to-r from-[#d4af37] via-[#ffd700] to-[#b8860b] text-[#3a0d1e] font-semibold py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300">
            Book Your Session
          </button>
          <button className="border border-yellow-400/40 text-yellow-400 font-semibold py-3 px-8 rounded-lg hover:bg-yellow-400/10 hover:border-yellow-400/60 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default SacredGallery;