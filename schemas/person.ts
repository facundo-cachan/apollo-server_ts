import { gql } from "apollo-server";
export default gql`
  type Social @unique(from: ["id"]) {
    id: String!
    account: String!
  }
  input inputPerson {
    id: String
    name: String
    email: String!
    social: [String]
    available: Boolean = false
  }
  type Person @unique(from: ["id"]) {
    id: ID!
    name: String
    email: String!
    social: [Social!]
    available: Boolean
    createdAt: String! @date
    updatedAt: String! @date
  }
  extend type Query {
    person(id: ID!, available: Boolean = true): Person
    persons(available: Boolean = true): [Person]!
  }
  extend type Mutation {
    addPerson(info: inputPerson!): Boolean!
    updatePerson(id: ID!, info: inputPerson!): Boolean!
  }
`;
