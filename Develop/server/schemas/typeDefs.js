const { gql } = require('apollo-server-express');


//need to input syntax type i.e. string,numbers, etc.
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: INT
    savedBooks: [Book]
  }

  type Book {
    bookid: String
    authors: String
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token:
    user: [User]
  }

  type Query {
    me: [User]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(author: String!, description: String!, title: String!, bookId: String!, image: String!, link: String!): User
    removeBook(bookid: String!): User
  }
`;

module.exports = typeDefs;
