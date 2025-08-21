import { Header } from "../../shared/ui/Header";
import {
  // Categories
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  // PortfolioItems
  useGetPortfolioItemsQuery,
  useCreatePortfolioItemMutation,
  useUpdatePortfolioItemMutation,
  useDeletePortfolioItemMutation,
  // Services
  useGetServicesQuery,
  useCreateServiceMutation,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
  // Stats
  useGetStatsQuery,
  useCreateStatMutation,
  useUpdateStatMutation,
  useDeleteStatMutation,
} from "../../shared/api/portfolioApi";
import { useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

export function Dashboard() {
  const { data: categories, isLoading: categoriesLoading } =
    useGetCategoriesQuery();
  const { data: portfolioItems, isLoading: portfolioItemsLoading } =
    useGetPortfolioItemsQuery();
  const { data: services, isLoading: servicesLoading } = useGetServicesQuery();
  const { data: stats, isLoading: statsLoading } = useGetStatsQuery();

  const [createCategory] = useCreateCategoryMutation();
  const [updateCategory] = useUpdateCategoryMutation();
  const [deleteCategory] = useDeleteCategoryMutation();
  const [createPortfolioItem] = useCreatePortfolioItemMutation();
  const [updatePortfolioItem] = useUpdatePortfolioItemMutation();
  const [deletePortfolioItem] = useDeletePortfolioItemMutation();
  const [createService] = useCreateServiceMutation();
  const [updateService] = useUpdateServiceMutation();
  const [deleteService] = useDeleteServiceMutation();
  const [createStat] = useCreateStatMutation();
  const [updateStat] = useUpdateStatMutation();
  const [deleteStat] = useDeleteStatMutation();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  if (
    categoriesLoading ||
    portfolioItemsLoading ||
    servicesLoading ||
    statsLoading
  ) {
    return <div className="text-center py-10">Loading...</div>;
  }

  const openModal = (type, item = null) => {
    setModalType(type);
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  const handleSave = async () => {
    const data = {
      ...selectedItem,
      [modalType === "category"
        ? "name"
        : modalType === "portfolio"
        ? "title"
        : modalType === "service"
        ? "title"
        : "number"]: prompt(
        `New ${modalType} ${modalType === "stat" ? "number" : "name"}?`
      ),
    };
    if (modalType === "category" && selectedItem) await updateCategory(data);
    else if (modalType === "category") await createCategory(data);
    else if (modalType === "portfolio" && selectedItem)
      await updatePortfolioItem(data);
    else if (modalType === "portfolio")
      await createPortfolioItem({
        ...data,
        category: "",
        image: "",
        likes: 0,
        views: 0,
        description: "",
        tags: [],
      });
    else if (modalType === "service" && selectedItem) await updateService(data);
    else if (modalType === "service")
      await createService({ ...data, description: "", features: [], icon: "" });
    else if (modalType === "stat" && selectedItem)
      await updateStat({ ...data, label: prompt("New label?") });
    else if (modalType === "stat")
      await createStat({ ...data, label: prompt("New label?") });
    closeModal();
  };

  const handleDelete = async () => {
    if (modalType === "category" && selectedItem)
      await deleteCategory(selectedItem.id);
    else if (modalType === "portfolio" && selectedItem)
      await deletePortfolioItem(selectedItem.id);
    else if (modalType === "service" && selectedItem)
      await deleteService(selectedItem.id);
    else if (modalType === "stat" && selectedItem)
      await deleteStat(selectedItem.id);
    closeModal();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start relative overflow-hidden pt-16 bg-gray-900 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-indigo-300">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Stats Section */}
          <div className="bg-gradient-to-br from-indigo-900 to-purple-900 p-6 rounded-xl pb-[100px] shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
            <h2 className="text-2xl font-semibold mb-6 text-indigo-200">
              Stats
            </h2>
            <ul className="space-y-3 max-h-64 overflow-y-auto">
              {stats?.map((stat) => (
                <li
                  key={stat.id}
                  className="flex justify-between items-center p-2 bg-indigo-800/50 rounded-lg hover:bg-indigo-700/50 transition-colors"
                >
                  <span className="text-lg">
                    {stat.number} - {stat.label}
                  </span>
                  <div>
                    <button
                      onClick={() => openModal("stat", stat)}
                      className="text-blue-400 mr-4 hover:text-blue-300 m-2"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => openModal("stat", stat)}
                      className="text-red-400 hover:text-red-300 m-2"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <button
              onClick={() => openModal("stat")}
              className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-500 transition-colors absolute bottom-4 right-4"
            >
              <FaPlus /> Add Stat
            </button>
          </div>

          {/* Services Section */}
          <div className="bg-gradient-to-br from-indigo-900 to-purple-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
            <h2 className="text-2xl font-semibold mb-6 text-indigo-200">
              Services
            </h2>
            <ul className="space-y-3 max-h-64 overflow-y-auto">
              {services?.map((service) => (
                <li
                  key={service.id}
                  className="flex justify-between items-center p-2 bg-indigo-800/50 rounded-lg hover:bg-indigo-700/50 transition-colors"
                >
                  <span className="text-lg">{service.title}</span>
                  <div>
                    <button
                      onClick={() => openModal("service", service)}
                      className="text-blue-400 mr-4 hover:text-blue-300 m-2"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => openModal("service", service)}
                      className="text-red-400 hover:text-red-300 m-2"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <button
              onClick={() => openModal("service")}
              className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-500 transition-colors absolute bottom-4 right-4"
            >
              <FaPlus /> Add Service
            </button>
          </div>

          {/* Portfolio Items Section */}
          <div className="bg-gradient-to-br from-indigo-900 to-purple-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
            <h2 className="text-2xl font-semibold mb-6 text-indigo-200">
              Portfolio Items
            </h2>
            <ul className="space-y-3 max-h-64 overflow-y-auto">
              {portfolioItems?.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center p-2 bg-indigo-800/50 rounded-lg hover:bg-indigo-700/50 transition-colors"
                >
                  <span className="text-lg">{item.title}</span>
                  <div>
                    <button
                      onClick={() => openModal("portfolio", item)}
                      className="text-blue-400 mr-4 hover:text-blue-300 m-2"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => openModal("portfolio", item)}
                      className="text-red-400 hover:text-red-300 m-2"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <button
              onClick={() => openModal("portfolio")}
              className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-500 transition-colors absolute bottom-4 right-4"
            >
              <FaPlus /> Add Item
            </button>
          </div>

          {/* Categories Section */}
          <div className="bg-gradient-to-br from-indigo-900 to-purple-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
            <h2 className="text-2xl font-semibold mb-6 text-indigo-200">
              Categories
            </h2>
            <ul className="space-y-3 max-h-64 overflow-y-auto">
              {categories?.map((category) => (
                <li
                  key={category.id}
                  className="flex justify-between items-center p-2 bg-indigo-800/50 rounded-lg hover:bg-indigo-700/50 transition-colors"
                >
                  <span className="text-lg">{category.name}</span>
                  <div>
                    <button
                      onClick={() => openModal("category", category)}
                      className="text-blue-400 mr-4 hover:text-blue-300 m-2"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => openModal("category", category)}
                      className="text-red-400 hover:text-red-300 m-2"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <button
              onClick={() => openModal("category")}
              className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-500 transition-colors absolute bottom-4 right-4"
            >
              <FaPlus /> Add Category
            </button>
          </div>
        </div>
      </main>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-indigo-900 to-purple-900 p-6 rounded-xl shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-200">
              {selectedItem ? "Edit" : "Add"}{" "}
              {modalType.charAt(0).toUpperCase() + modalType.slice(1)}
            </h2>
            <input
              type="text"
              defaultValue={
                selectedItem
                  ? modalType === "stat"
                    ? selectedItem.number
                    : selectedItem.name || selectedItem.title
                  : ""
              }
              className="w-full p-2 mb-4 bg-indigo-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder={`Enter ${modalType} ${
                modalType === "stat" ? "number" : "name"
              }`}
            />
            {modalType === "stat" && (
              <input
                type="text"
                defaultValue={selectedItem?.label || ""}
                className="w-full p-2 mb-4 bg-indigo-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter label"
              />
            )}

<div className="flex justify-between">
  {/* سمت چپ */}
  <div>
    {selectedItem && (
      <button
        onClick={handleDelete}
        className="bg-red-600 m-2 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition-colors"
      >
        Delete
      </button>
    )}
  </div>

  {/* سمت راست */}
  <div className="flex space-x-4">
    <button
      onClick={handleSave}
      className="bg-green-600 m-2 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition-colors"
    >
      Save
    </button>

    <button
      onClick={closeModal}
      className="bg-gray-600 m-2 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition-colors"
    >
      Cancel
    </button>
  </div>
</div>

          </div>
        </div>
      )}
    </div>
  );
}
