const {
  product,
  products,
  addProduct,
  getProductByCategory,
} = require('./product.resolvers');
const { login } = require('./auth.resolvers');
const { addCategory, getCategory } = require('./category.resolvers');
const { RegularExpression } = require('graphql-scalars');

const CategoryNameType = new RegularExpression(
  'CategoryNameType',
  /^[a-zA-Z0-9]{3,8}$/
);

const resolvers = {
  Query: {
    hello: () => 'hola mundo',
    product,
    products,
    category: getCategory,
  },
  Mutation: {
    addProduct,
    login,
    addCategory,
  },
  CategoryNameType,
  Category: {
    products: getProductByCategory,
  },
};

module.exports = resolvers;
