import React from "react";
import { Grid, List, Heart, Eye } from "lucide-react";
import { PortfolioSectionProps } from "../types/interface";

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  activeCategory,
  viewMode,
  filteredItems,
  setActiveCategory,
  setViewMode,
  openModal,
  categories,
}) => {
  return (
    <section id="portfolio" className="py-20 bg-purple-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">پورتفولیو</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-300">
            مجموعه‌ای از بهترین آثار عکاسی و طراحی من
          </p>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <div className="flex flex-wrap justify-center gap-2">

              {categories?.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-purple-700/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-full transition-all duration-300 ${
                  viewMode === "grid"
                    ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg"
                    : "bg-white/10 text-gray-300 hover:bg-purple-700/30"
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-full transition-all duration-300 ${
                  viewMode === "list"
                    ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg"
                    : "bg-white/10 text-gray-300 hover:bg-purple-700/30"
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div
          className={`grid gap-6 ${
            viewMode === "grid"
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1"
          }`}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
              onClick={() => openModal(item)}
            >
              <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-md shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex items-center gap-4 text-white text-sm">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      {item.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {item.views}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-pink-400 mb-2 font-medium">
                    {item.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-purple-800/30 text-purple-200 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
