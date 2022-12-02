import { products, categories } from '../db/db.js';

export const Query = {
  products: () => {
    return products;
  },
  product: (parent, args, context) => {
    return products.find((product) => product.id == args.id);
  },
  categories: () => categories,
  category: (parent, args) => {
    return categories.find((category) => category.id == args.id);
  },
};
