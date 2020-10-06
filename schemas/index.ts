import { gql } from "apollo-server";
const init = gql`
  interface Character {
    id: ID
    name: String
  }
  type App {
    id: String!
    db: String!
    title: String!
  }
  type Query {
    app(id: ID!, available: Boolean = true): App!
    isLoggedIn(token: String!): Boolean!
  }
  type Mutation {
    signIn(id: String!, pass: String!): String!
    signOut(id: String!): Boolean!
    addOrRemoveFromCart(id: ID!): [ID!]!
  }
`;

import directives from "./directives";
import rol from "./rol";
import user from "./user";
import person from "./person";

export default [init, directives, rol, user, person];
