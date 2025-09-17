import { Star } from 'lucide-react';

export const ServiceCardGallery = ({ title, category, description, icon }) => {
  return (
    <div className="bg-gradient-to-br from-[#2a0015] via-[#480026] to-[#2a0015] rounded-lg overflow-hidden border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 group cursor-pointer">
      {/* Image/Icon Section */}
      <div className="aspect-square bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center relative overflow-hidden">
        <div className="text-yellow-400 opacity-30 group-hover:opacity-50 transition-opacity duration-300">
          <Star size={48} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-800/20"></div>
      </div>
      
      {/* Content Section */}
      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs font-semibold text-yellow-300 uppercase tracking-wide">
            {category}
          </span>
        </div>
        <h3 className="text-lg font-bold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors">
          {title}
        </h3>
        <p className="text-yellow-200 text-sm leading-relaxed opacity-90">
          {description}
        </p>
      </div>
    </div>
  );
};