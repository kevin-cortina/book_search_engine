const { Class, User } = require('../models');

const resolvers = {
  //getting the data query
  Query: {
    users: async () => {
      return await User.find({}).populate('classes');

    },
    books: async () => {
      return await Book.find({}).populate('classes');;
    },

    //single object 
    // OBJECT: async (parent, args) => {
    //   return await OBJECT.findById(args.id).populate(ANOTHER OBJECT);
    // },
  },
  //changing the data
  Mutation: {
    login: async (parent, {email, password}) => {
      //unsure of how to code returns auth
      // return await OBJECT.create(...args);
    },
    addUser: async (parent, {username, email, password}) => {
       //unsure of how to code returns auth
      // return await OBJECT.create(...args);
    },
    saveBook: async (parent, {author, description, title, bookId, image, link}) => {
       //unsure of how to code returns user type // look into creating input type
      // return await OBJECT.create(...args);
    },
    removeBook: async (parent, {bookId}) => {
      //unsure of how to code returns user
    //  return await OBJECT.create(...args);
   },
  },
};

module.exports = resolvers;
