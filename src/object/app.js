import { ApolloServer } from 'apollo-server';

import { typeDefs } from '../schema.js';

import { Query } from '../resolvers/Query.js';
import { Product } from '../resolvers/Product.js';
import { Category } from '../resolvers/Category.js';
import { Mutation } from '../resolvers/Mutation.js';

import { products, categories, reviews, db } from '../db/db.js';

console.log(db);

//string, Int, Float, Boolean - this is a scalar type

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Product,
    Category,
    Mutation,
  },
  context: {
    // products,
    // categories,
    // reviews,
    db,
  },
});

server.listen().then(({ url }) => {
  console.log(`Server is ready at ${url}`);
});
