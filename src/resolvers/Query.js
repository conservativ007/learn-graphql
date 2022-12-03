export const Query = {
  products: (parent, { filter }, { products, reviews }) => {
    if (filter) {
      const { onSale, avgRating } = filter;

      if (onSale === true) {
        products = products.filter((product) => product.onSale);
      }

      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        products = products.filter((product) => {
          let sumRating = 0;
          let numberOfReviews = 0;

          reviews.forEach((review) => {
            if (review.productId === product.id) {
              sumRating += review.rating;
              numberOfReviews++;
            }
          });

          const avgProductRating = sumRating / numberOfReviews;
          return avgProductRating >= avgRating;
        });
      }
    }

    return products;
  },
  product: (parent, { id }, { products }) => {
    return products.find((product) => product.id == id);
  },
  categories: (parent, args, { categories }) => {
    return categories;
  },
  category: (parent, { id }, { categories }) => {
    return categories.find((category) => category.id == id);
  },
  reviews: (parent, args, { reviews }) => {
    return reviews;
  },
};

// here is show how use the global query
