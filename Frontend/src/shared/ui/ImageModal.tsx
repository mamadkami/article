import React from 'react';
import { X, Heart, Share2, Download, Eye } from 'lucide-react';
import { ImageModalProps } from '../types/interface';

export const ImageModal: React.FC<ImageModalProps> = ({ selectedImage, closeModal }) => {
  if (!selectedImage) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={closeModal}
    >
      <div
        className="max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={selectedImage.image}
            alt={selectedImage.title}
            className="w-full h-96 object-cover"
          />
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="text-sm text-blue-600 mb-2 font-medium">
                {selectedImage.category}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-gray-600">{selectedImage.description}</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <Download className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {selectedImage.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4 text-gray-600">
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                {selectedImage.likes}
              </div>
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {selectedImage.views}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};