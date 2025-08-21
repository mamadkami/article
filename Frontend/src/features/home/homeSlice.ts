import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PortfolioItem, Service } from '../../shared/types/interface';

interface HomeState {
  isMenuOpen: boolean;
  activeCategory: string;
  viewMode: 'grid' | 'list';
  selectedImage: PortfolioItem | null;
  isVisible: boolean;
  services: Service[];
  portfolioItems: PortfolioItem[]; // اضافه شد
}

export const initialState: HomeState = {
  isMenuOpen: false,
  activeCategory: 'همه',
  viewMode: 'grid',
  selectedImage: null,
  isVisible: false,
  services: [],
  portfolioItems: [], // اضافه شد
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    toggleMenu(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setActiveCategory(state, action: PayloadAction<string>) {
      state.activeCategory = action.payload;
    },
    setViewMode(state, action: PayloadAction<'grid' | 'list'>) {
      state.viewMode = action.payload;
    },
    setSelectedImage(state, action: PayloadAction<PortfolioItem | null>) {
      state.selectedImage = action.payload;
    },
    setIsVisible(state, action: PayloadAction<boolean>) {
      state.isVisible = action.payload;
    },
    setServices(state, action: PayloadAction<Service[]>) {
      state.services = action.payload;
    },
    setPortfolioItems(state, action: PayloadAction<PortfolioItem[]>) {
      state.portfolioItems = action.payload; // اکشن اضافه شد
    },
  },
});

export const {
  toggleMenu,
  setActiveCategory,
  setViewMode,
  setSelectedImage,
  setIsVisible,
  setServices,
  setPortfolioItems, // اکشن اضافه شد
} = homeSlice.actions;

export default homeSlice.reducer;
