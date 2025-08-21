import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { Camera, Palette, Grid, Award } from "lucide-react";


const iconMap: Record<string, JSX.Element> = {
  Camera: <Camera className="w-8 h-8" />,
  Palette: <Palette className="w-8 h-8" />,
  Grid: <Grid className="w-8 h-8" />,
  Award: <Award className="w-8 h-8" />,
};
export const ServicesSection: React.FC = () => {
  const services = useSelector((state: RootState) => state.home.services);

  if (!services || services.length === 0) {
    return <div>در حال بارگذاری خدمات...</div>;
  }

  console.log('services =>' , services)


  return (
    <section id="services" className="py-20 bg-black text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center text-white mb-6 group-hover:rotate-12 transition-transform duration-300">
              {iconMap[service.icon]}
            </div>
            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};