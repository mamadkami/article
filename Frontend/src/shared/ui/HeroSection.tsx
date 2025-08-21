import React from 'react';
import { Eye, Play } from 'lucide-react';
import { HeroSectionProps } from '../types/interface';

export const HeroSection: React.FC<HeroSectionProps> = ({ isVisible }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-16 bg-gray-900"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-4">
            هنر را <span className="text-white">زندگی کن</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            عکاسی و طراحی با نگاهی هنری و خلاقانه. هر تصویر داستانی دارد، هر طراحی احساسی منتقل می‌کند.
          </p>

          <div className="hidden flex flex-col sm:flex-row gap-5 justify-center items-center mb-14">
            <button className="group relative bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-7 py-3 rounded-full overflow-hidden font-medium transition-all duration-300">
              <span className="relative flex items-center gap-2 z-10">
                <Play className="w-5 h-5" />
                تماشای ویدیو
              </span>
              <span className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-300 rounded-full"></span>
            </button>

            <button className="bg-transparent border-2 border-white text-white px-7 py-3 rounded-full hover:bg-white/10 transition-colors duration-300 flex items-center gap-2 font-medium">
              <Eye className="w-5 h-5" />
              مشاهده آثار
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '500+', label: 'پروژه تکمیل شده' },
              { number: '50+', label: 'مشتری راضی' },
              { number: '10', label: 'سال تجربه' },
              { number: '25', label: 'جایزه دریافتی' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 rounded-2xl py-6 px-4 shadow-lg text-center text-white transform transition-transform duration-300 hover:scale-105"
              >
                <div className="text-2xl md:text-3xl font-bold">{stat.number}</div>
                <div className="text-sm md:text-base mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* افکت موج یا bubble در بکگراند */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900 via-gray-900 to-gray-800 opacity-30 -z-10 animate-pulse-slow"></div>
    </section>
  );
};
