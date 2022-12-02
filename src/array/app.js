import { ApolloServer, gql } from 'apollo-server';

//tring, Int, Float, Boolean - this is a scalar type

const typeDefs = gql`
  type Query {
    hello: [String!]!
  }
`;

const resolvers = {
  Query: {
    hello: () => ['hello!', 'my', 'friend'],
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server is ready at ${url}`);
});
