import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleMenu,
  setActiveCategory,
  setViewMode,
  setSelectedImage,
  setIsVisible,
  setServices,
  setPortfolioItems, 
} from "../../features/home/homeSlice";
import { RootState } from "../../app/store";
import { Header } from "../../shared/ui/Header";
import { HeroSection } from "../../shared/ui/HeroSection";
import { PortfolioSection } from "../../shared/ui/PortfolioSection";
import { ServicesSection } from "../../shared/ui/ServicesSection";
import { AboutSection } from "../../shared/ui/AboutSection";
import { ContactSection } from "../../shared/ui/ContactSection ";
import { Footer } from "../../shared/ui/Footer";
import { ImageModal } from "../../shared/ui/ImageModal";
import { PortfolioItem } from "../../shared/types/interface";
import {
  useGetCategoriesQuery,
  useGetServicesQuery,
  useGetPortfolioItemsQuery
} from "../../shared/api/portfolioApi";
import { Loading } from "../../shared/ui/Loading";

export const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const { isMenuOpen, activeCategory, viewMode, selectedImage, isVisible, portfolioItems } =
    useSelector((state: RootState) => state.home);
  const [categories, setCategories] = useState<string[]>([]);

  const { data: categoriesData, error: categoriesError, isLoading: categoriesLoading } = useGetCategoriesQuery();
  const { data: servicesData, error: servicesError, isLoading: servicesLoading } = useGetServicesQuery();
  const { data: portfolioItemsData, error: portfolioItemsError, isLoading: portfolioItemsLoading } = useGetPortfolioItemsQuery();

  // گرفتن دسته‌بندی‌ها
  useEffect(() => {
    if (categoriesData) {
      setCategories(categoriesData.map((cat: any) => cat.name));
    }
  }, [categoriesData]);

  // گرفتن سرویس‌ها و ذخیره در Redux
  useEffect(() => {
    dispatch(setIsVisible(true));
    if (servicesData) {
      const sortedServices = servicesData.slice().sort((a: any, b: any) => a.order - b.order);
      dispatch(setServices(sortedServices));
    }
  }, [servicesData, dispatch]);

  // گرفتن portfolio items و ذخیره در Redux
  useEffect(() => {
    if (portfolioItemsData) {
      const sortedItems = portfolioItemsData.slice().sort((a: any, b: any) => a.order - b.order);
      dispatch(setPortfolioItems(sortedItems));
    }
  }, [portfolioItemsData, dispatch]);

  // فیلتر کردن آیتم‌ها بر اساس دسته‌بندی فعال
  const filteredItems =
    activeCategory === "همه"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const openModal = (item: PortfolioItem) => {
    dispatch(setSelectedImage(item));
  };

  const closeModal = () => {
    dispatch(setSelectedImage(null));
  };

  const isLoading = categoriesLoading || servicesLoading || portfolioItemsLoading;
  const isError = categoriesError || servicesError || portfolioItemsError;

  return (
    <div className="font-sans bg-gray-50 text-gray-800 rtl overflow-x-hidden antialiased">
      {isLoading && <Loading />}
      {isError && <p>Error loading data</p>}

      {!isLoading && !isError && (
        <>
          <Header />
          <HeroSection isVisible={isVisible} />
          <PortfolioSection
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={(category: string) => dispatch(setActiveCategory(category))}
            filteredItems={filteredItems}
            viewMode={viewMode}
            setViewMode={(mode: "grid" | "list") => dispatch(setViewMode(mode))}
            openModal={openModal}
          />
          <ServicesSection />
          <AboutSection />
          <ContactSection />
          <Footer />
          <ImageModal selectedImage={selectedImage} closeModal={closeModal} />
        </>
      )}
    </div>
  );
};
