export const Product = {
  // category: (parent, args, { categories }) => {
  category: ({ categoryId }, args, { categories }) => {
    // const categoryId = parent.categoryId;
    return categories.find((category) => category.id == categoryId);
  },
};
