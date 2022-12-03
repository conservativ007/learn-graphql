export const Category = {
  products: ({ id }, args, { db }) => {
    let filter = args.filter;

    // 1 we filtered products to categoryId
    // 2 we filtered products to onsale = true

    let products = db.products.filter((product) => product.categoryId == id);

    if (filter && filter.onSale === true) {
      products = products.filter((product) => product.onSale === true);
    }

    return products;
  },
};
