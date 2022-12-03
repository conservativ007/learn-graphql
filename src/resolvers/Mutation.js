import { v4 } from 'uuid';

export const Mutation = {
  addCategory: (parent, { input }, { categories }) => {
    const { name } = input;

    let newCategory = {
      id: v4(),
      name: name,
    };

    categories.push(newCategory);
    return newCategory;
  },
  addProduct: (parent, { input }, { products }) => {
    let newProduct = { id: v4(), ...input };

    products.push(newProduct);
    return newProduct;
  },
  addReview: (parent, { input }, { reviews }) => {
    let date = new Date();

    let dateStr =
      date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();

    let newReview = {
      id: v4(),
      date: dateStr,
      ...input,
    };

    reviews.push(newReview);
    return newReview;
  },
};
