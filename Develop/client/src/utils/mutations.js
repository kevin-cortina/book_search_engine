import {gql} from '@apollo/client';

export const LOGIN_USER = gql`
    mutation loginUser ($name: String!, $password:String!) {
        loginUser(name: $name, password: $password) {
          name
          password
        }
    },
`;

const ADD_USER = gql`
    mutation addUser ($username: String!, $email: String!, $password: String!) {
        addUser(name: $username, email: $email, password: $password) {
          _id
          username
          email
          password
        }
    },
`;

const SAVE_BOOK = gql`
    mutation saveBook ($author: String!, $description: String!, $title: String!, $bookId: String!, $image: String!, $link: String!) {
        saveBook(author: $author, description: $description, title: $title, bookId: $bookId, image: $image, link: $link) {
          author
          description
          title
          bookId
          image
          link
        }
    },
`;

const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!) {
        removeBook(bookId: $bookId) {
         bookId
        }
    },
`;