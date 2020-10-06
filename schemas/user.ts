import { gql } from "apollo-server";
export default gql`
  union UserAccount = User | Person
  input inputUser {
    id: ID
    idRol: ID
    idPerson: ID!
    pass: String
    available: Boolean = false
  }
  type User @unique(from: ["id"]) {
    id: ID!
    idRol: Rol
    idPerson: Person!
    pass: String!
    available: Boolean
    createdAt: String! @date
    updatedAt: String! @date
  }
  extend type Query {
    user(id: ID!, available: Boolean = true): User
    users(available: Boolean = true): [User]!
    search: [UserAccount]
  }
  extend type Mutation {
    addUser(info: inputUser!): Boolean!
    updateUser(id: ID!, info: inputUser!): Boolean!
  }
`;
