import { products } from '../db/db.js';

export const Category = {
  products: (parent, args, context) => {
    const { id } = parent;

    let testArr = [];

    products.forEach((val) => {
      if (val.categoryId == id) testArr.push(val);
    });

    return testArr;
  },
};
