import ServiceCard from '@/components/ServiceCard'
import React from 'react'

const Services = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto text-center mb-5 mt-20">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 text-transparent bg-clip-text mb-4">
          Sacred Services
        </h1>
        <p className="text-yellow-200 text-lg p-2">
          Discover the perfect spiritual service for your journey. Each offering
          is designed to provide deep insights and transformative healing
          experiences.
        </p>
      </div>
      <div className='mt-5 min-h-screen h-1/2 flex items-center justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 md:p-8 p-4'>
          <ServiceCard
            title="Tarot Reading"
            description="Unveil the mysteries of your past, present, and future through the ancient wisdom of tarot cards. Each reading provides deep insights into your life's journey."
            includedServices={[
              "3-card spread",
              "Celtic cross reading",
              "Relationship guidance",
              "Career insights"
            ]}
            logo=""
          />
          <ServiceCard
            title="Tarot Reading"
            description="Unveil the mysteries of your past, present, and future through the ancient wisdom of tarot cards. Each reading provides deep insights into your life's journey."
            includedServices={[
              "3-card spread",
              "Celtic cross reading",
              "Relationship guidance",
              "Career insights"
            ]}
          />
          <ServiceCard
            title="Tarot Reading"
            description="Unveil the mysteries of your past, present, and future through the ancient wisdom of tarot cards. Each reading provides deep insights into your life's journey."
            includedServices={[
              "3-card spread",
              "Celtic cross reading",
              "Relationship guidance",
              "Career insights"
            ]}
          />
          <ServiceCard
            title="Tarot Reading"
            description="Unveil the mysteries of your past, present, and future through the ancient wisdom of tarot cards. Each reading provides deep insights into your life's journey."
            includedServices={[
              "3-card spread",
              "Celtic cross reading",
              "Relationship guidance",
              "Career insights"
            ]}
          />
          <ServiceCard
            title="Tarot Reading"
            description="Unveil the mysteries of your past, present, and future through the ancient wisdom of tarot cards. Each reading provides deep insights into your life's journey."
            includedServices={[
              "3-card spread",
              "Celtic cross reading",
              "Relationship guidance",
              "Career insights"
            ]}
          />
          <ServiceCard
            title="Tarot Reading"
            description="Unveil the mysteries of your past, present, and future through the ancient wisdom of tarot cards. Each reading provides deep insights into your life's journey."
            includedServices={[
              "3-card spread",
              "Celtic cross reading",
              "Relationship guidance",
              "Career insights"
            ]}
          />
        </div>
      </div>
      <div>
        <div className="w-11/12 mx-auto text-center mb-16">

          <h2 className="text-4xl py-5 md:text-5xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-transparent bg-clip-text tracking-tight drop-shadow-lg">
            Special Packages
          </h2>

          <div className="relative mt-5 md:p-10 sm:p-6 p-4 bg-gradient-to-br from-[#d4af37] via-[#ffd700] to-[#b8860b] rounded-3xl shadow-2xl border-2 border-yellow-300">

            <div className="p-6 flex flex-col items-center justify-center">
              <span className="text-2xl md:text-4xl font-bold text-[#3a0d1e] mb-3 animate-pulse">
                Coming Soon...
              </span>
              <p className="text-[#3a0d1e] text-base md:text-lg font-medium opacity-90">
                Stay tuned for <span className="font-semibold text-yellow-900">exclusive spiritual packages</span> designed for deeper transformation and healing.
              </p>
            </div>
            {/* Decorative Glow */}
            <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 opacity-30 blur-lg pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services