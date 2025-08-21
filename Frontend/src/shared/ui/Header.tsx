import React from 'react';
import { Menu, X, Camera } from 'lucide-react';
import { HeaderProps } from '../types/interface';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import {
  toggleMenu,

} from "../../features/home/homeSlice";
export const Header: React.FC<HeaderProps> = () => {
  // لیست آیتم‌ها با متن فارسی و id انگلیسی
  const menuItems = [
    { label: 'صفحه اصلی', id: 'home' },
    { label: 'پورتفولیو', id: 'portfolio' },
    { label: 'خدمات', id: 'services' },
    { label: 'درباره من', id: 'about' },
    { label: 'تماس', id: 'contact' },
  ];

  const { isMenuOpen } =
  useSelector((state: RootState) => state.home);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-lg z-50 shadow-md transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* لوگو */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">آرت گالری</span>
          </div>

          {/* منوی دسکتاپ */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.id}`}
                className="text-white hover:text-pink-400 transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              تماس
            </a>
          </div>

          {/* دکمه موبایل */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-pink-400 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* منوی موبایل */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/10 backdrop-blur-lg shadow-lg py-4 flex flex-col">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.id}`}
                className="block px-6 py-2 text-white hover:bg-white/20 rounded-lg transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};
