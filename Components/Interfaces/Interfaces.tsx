export interface Category {
  name: string;
}

export interface CategoriesArray extends Array<Category> {}

export interface Product {
  avatar: string;
  category: string;
  description: string;
  developerEmail: string;
  name: string;
  price: number;
}

export interface ProductsArray extends Array<Product> {}

export interface CategoriesApi {
  categories: {
    name: string;
  }[];
}

export interface ProductsApi {
  products: {
    avatar: string;
    category: string;
    description: string;
    developerEmail: string;
    name: string;
    price: number;
  }[];
}

export interface Navigation {
  navigate: (componentName: string) => void ;
}
