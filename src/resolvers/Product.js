export const Product = {
  // category: (parent, args, { categories }) => {
  category: ({ categoryId }, args, { categories }) => {
    // const categoryId = parent.categoryId;
    return categories.find((category) => category.id == categoryId);
  },
  review: ({ id }, args, { reviews }) => {
    return reviews.filter((elem) => elem.productId === id);
  },
};

// in comments string is explaying how to use another way
// of passed params
