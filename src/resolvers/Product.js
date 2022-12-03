export const Product = {
  // category: (parent, args, { categories }) => {
  category: ({ categoryId }, args, { db }) => {
    // const categoryId = parent.categoryId;
    return db.categories.find((category) => category.id == categoryId);
  },
  review: ({ id }, args, { db }) => {
    return db.reviews.filter((elem) => elem.productId === id);
  },
};

// in comments string is explaying how to use another way
// of passed params
