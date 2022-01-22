const { AuthenticationError } = require('apollo-server-express');
const { Book, User } = require('../models');

const resolvers = {
  //getting the data query
  Query: {
    users: async () => {
      return await User.find({}).populate('classes');
    },
    
    books: async () => {
      return await Book.find({}).populate('classes');;
    },

    //single user
    users: async (parent, args) => {
      return await User.findById(args.id).populate(User.id);
    },

    //context in this section needs to be replaced by a different object
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  //changing the data
  Mutation: {
    login: async (parent, {email, password}) => {
            const profile = await User.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
    }
  },

    addUser: async (parent, {username, email, password}) => {
      return User.create(
        { username },
        {email},
        {password},
        );
    },

    saveBook: async (parent, {author, description, title, bookId, image, link}) => {
       //unsure of how to code returns user type // look into creating input type
       return await Book.findOneAndUpdate(
        { author}, 
        { description },
        { title },
        { bookId },
        { image },
        { link }
        );
       },

    removeBook: async (parent, {bookId}) => {
      return User.findOneAndDelete({ _id: bookId });
    },
    },

};

module.exports = resolvers;
