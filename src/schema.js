import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    products: [Product!]!
    product(id: ID!): Product

    categories: [Category!]!
    category(id: ID!): Category

    reviews: [Review!]!
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
    review: [Review!]!
  }

  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Boolean!
    productId: ID!
  }
`;
