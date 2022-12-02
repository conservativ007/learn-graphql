import { categories } from '../db/db.js';

export const Product = {
  category: (parent, args, context) => {
    const categoryId = parent.categoryId;
    return categories.find((category) => category.id == categoryId);
  },
};
