import Link from 'next/link'
import React from 'react'

const ServiceCard = ({ title, description, includedServices, logo }) => {

    return (
        <div className="w-full max-w-2xl h-auto sm:h-[400px] mx-auto bg-gradient-to-br from-[#2a0015] via-[#480026] to-[#2a0015] text-yellow-400 rounded-2xl shadow-lg p-6 flex flex-col justify-between border-[1px] border-white-500 hover:-translate-y-1 hover:border-yellow-400/40 hover:shadow-yellow-400/20 transition duration-300">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                    <span className="text-yellow-400 text-2xl">{logo}</span>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 text-transparent bg-clip-text">{title}</h2>
                </div>
            </div>

            {/* Description */}
            <p className="text-yellow-200 text-md mb-4">
                {description}
            </p>

            {/* What's Included */}
            <div className="mb-4">
                <h3 className="font-semibold mb-2 text-lg">What's Included:</h3>
                <ul className="space-y-1 text-yellow-200 text-md list-disc list-inside ">
                    {includedServices && includedServices.map((service, index) => (
                        <li key={index}>{service}</li>
                    ))}
                </ul>
            </div>

            {/* Button */}
            <Link href="/contact">
                <button className="w-full gold-gradient-animate bg-gradient-to-r from-[#d4af37] via-[#ffd700] to-[#b8860b] text-[#3a0d1e] font-semibold py-2 px-4 rounded-xl hover:bg-yellow-400  transition">
                    Book This Service
                </button>
            </Link>
        </div>
    )
}

export default ServiceCard