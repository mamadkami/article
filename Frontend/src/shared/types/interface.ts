export interface PortfolioItem {
  id: number; 
  image: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  likes: number;
  views: number;
}
interface HomeState {
  isMenuOpen: boolean;
  activeCategory: string;
  viewMode: "grid" | "list";
  selectedImage: PortfolioItem | null;
  isVisible: boolean;
  services: Service[];
}

export const initialState: HomeState = {
  isMenuOpen: false,
  activeCategory: "همه",
  viewMode: "grid",
  selectedImage: null,
  isVisible: false,
  services: [],
};

export interface HeaderProps {
  // isMenuOpen: boolean;
  // toggleMenu: () => void;
}

export interface HeroSectionProps {
  isVisible: boolean;
}


export interface PortfolioSectionProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  filteredItems: PortfolioItem[];
  viewMode: "grid" | "list";
  setViewMode: (mode: "grid" | "list") => void;
  openModal: (item: PortfolioItem) => void;
  categories?: string[];
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}



export interface ImageModalProps {
  selectedImage: PortfolioItem | null; 
  closeModal: () => void;
}