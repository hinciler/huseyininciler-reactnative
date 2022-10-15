import create from "zustand";
import {
  CategoriesArray,
  Product,
  ProductsArray,
} from "../Interfaces/Interfaces";

interface BearState {
  categoriesArr: CategoriesArray;
  setCategoriesArr: (arr: CategoriesArray) => void;
  productsArr: ProductsArray;
  setProductsArr: (arr: ProductsArray) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedProduct: Product;
  setSelectedProduct: (product: Product) => void;
}

const useBearStore = create<BearState>((set) => {
  return {
    categoriesArr: [],
    setCategoriesArr: (arr) => set(() => ({ categoriesArr: arr })),
    productsArr: [],
    setProductsArr: (arr) => set(() => ({ productsArr: arr })),
    selectedCategory: "All",
    setSelectedCategory: (category) => set(() => ({ selectedCategory: category })),
    selectedProduct: {
      avatar: "",
      category: "",
      description: "",
      developerEmail: "",
      name: "",
      price: 0,
    },
    setSelectedProduct: (product) => set(() => ({ selectedProduct: product })),
  };
});

export default useBearStore;
