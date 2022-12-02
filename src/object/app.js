import { ApolloServer, gql } from 'apollo-server';
import { products, categories } from '../db/db.js';

// console.log(products);

//tring, Int, Float, Boolean - this is a scalar type

const typeDefs = gql`
  type Query {
    products: [Product!]!
    product(id: ID!): Product

    categories: [Category!]!
    category(id: ID!): Category
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    image: String!
    categoryId: ID!
    category: Category
  }

  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }
`;

const resolvers = {
  Query: {
    products: () => {
      return products;
    },
    product: (parent, args, context) => {
      return products.find((product) => product.id == args.id);
    },
    categories: () => categories,
    category: (parent, args) => {
      return categories.find((category) => category.id == args.id);
    },
  },
  Category: {
    products: (parent, args, context) => {
      const { id } = parent;

      let testArr = [];

      products.forEach((val) => {
        if (val.categoryId == id) testArr.push(val);
      });

      return testArr;
    },
  },
  Product: {
    category: (parent, args, context) => {
      const categoryId = parent.categoryId;
      return categories.find((category) => category.id == categoryId);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server is ready at ${url}`);
});
