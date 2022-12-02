import { ApolloServer } from 'apollo-server';

import { typeDefs } from '../schema.js';

import { Query } from '../resolvers/Query.js';
import { Product } from '../resolvers/Product.js';
import { Category } from '../resolvers/Category.js';

import { products, categories } from '../db/db.js';

//string, Int, Float, Boolean - this is a scalar type

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Product,
    Category,
  },
  context: {
    products,
    categories,
  },
});

server.listen().then(({ url }) => {
  console.log(`Server is ready at ${url}`);
});
