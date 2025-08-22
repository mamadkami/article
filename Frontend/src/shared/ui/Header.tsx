import React from 'react';
import { Menu, X, Camera } from 'lucide-react';
import { HeaderProps } from '../types/interface';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { toggleMenu } from "../../features/home/homeSlice";

export const Header: React.FC<HeaderProps> = () => {
  const dispatch = useDispatch();
  const { isMenuOpen } = useSelector((state: RootState) => state.home);

  // لیست آیتم‌ها با متن فارسی و id انگلیسی
  const menuItems = [
    { label: 'صفحه اصلی', id: 'home' },
    { label: 'پورتفولیو', id: 'portfolio' },
    { label: 'خدمات', id: 'services' },
    { label: 'درباره من', id: 'about' },
    { label: 'تماس', id: 'contact' },
  ];

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
              onClick={() => dispatch(toggleMenu())}
              className="text-white hover:text-pink-400 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* منوی موبایل */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-lg py-6 flex flex-col items-start pl-6 pr-6 rounded-b-lg transition-all duration-300">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.id}`}
                className="block w-full px-4 py-3 text-gray-900 dark:text-white hover:bg-pink-100 dark:hover:bg-pink-700/50 rounded-md transition-all duration-200 text-lg font-medium"
                onClick={() => dispatch(toggleMenu())}
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