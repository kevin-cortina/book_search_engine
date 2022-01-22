const { Class, User } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate('classes');

    },
    books: async () => {
      return await Book.find({}).populate('classes');;
    }
  }
};

module.exports = resolvers;
