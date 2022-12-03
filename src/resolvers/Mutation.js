import { v4 } from 'uuid';

export const Mutation = {
  // added data

  addCategory: (parent, { input }, { db }) => {
    const { name } = input;

    let newCategory = {
      id: v4(),
      name: name,
    };

    db.categories.push(newCategory);
    return newCategory;
  },
  addProduct: (parent, { input }, { db }) => {
    let newProduct = { id: v4(), ...input };

    db.products.push(newProduct);
    return newProduct;
  },
  addReview: (parent, { input }, { db }) => {
    let date = new Date();

    let dateStr =
      date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();

    let newReview = {
      id: v4(),
      date: dateStr,
      ...input,
    };

    db.reviews.push(newReview);
    return newReview;
  },

  // delete some data

  deleteCategory: (parent, { id }, { db }) => {
    db.categories = db.categories.filter((category) => category.id !== id);
    db.products = db.products.map((product) => {
      if (product.categoryId === id) {
        return {
          ...product,
          categoryId: null,
        };
      }
      return product;
    });
    return true;
  },

  deleteProduct: (parent, { id }, { db }) => {
    db.products = db.products.filter((product) => product.id != id);
    db.reviews = db.reviews.filter((review) => review.productId != id);
    return true;
  },

  deleteReview: (parent, { id }, { db }) => {
    db.reviews = db.reviews.filter((review) => review.productId != id);
    return true;
  },
};
