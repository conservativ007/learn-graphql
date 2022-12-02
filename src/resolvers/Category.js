export const Category = {
  // products: (parent, args, { products }) => {
  products: ({ id }, args, { products }) => {
    // const { id } = parent;

    let testArr = [];

    products.forEach((val) => {
      if (val.categoryId == id) testArr.push(val);
    });

    return testArr;
  },
};
