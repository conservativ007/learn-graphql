import { ApolloServer, gql } from 'apollo-server';

//tring, Int, Float, Boolean - this is a scalar type

const typeDefs = gql`
  type Query {
    hello: String!
    numberOfAnimals: Int
    price: Float
    isCool: Boolean
  }
`;

const resolvers = {
  Query: {
    hello: () => 'hello!',
    numberOfAnimals: () => {
      return 55;
    },
    price: () => {
      return 42.5;
    },
    isCool: () => {
      return true;
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
