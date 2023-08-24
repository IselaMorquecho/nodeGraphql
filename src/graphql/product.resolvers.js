const ProductsService = require('./../services/product.service');
const service = new ProductsService();

const product = async (_, { id }) => {
  const product = await service.findOne(id);
  return product;
};

const products = async () => {
  const products = await service.find({});
  return products;
};

const addProduct = async (newProduct) => {
  const product = await service.create(newProduct);
  return product;
};

const getProductByCategory = async (parent) => {
  const id = parent.dataValues.id;
  return await service.getByCategory(id);
};

module.exports = { product, products, addProduct, getProductByCategory };
