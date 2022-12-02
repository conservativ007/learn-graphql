export const Category = {
  // products: (parent, args, { products }) => {
  products: ({ id }, args, { products }) => {
    // const { id } = parent;
    return products.filter((product) => product.categoryId == id);
  },
};
