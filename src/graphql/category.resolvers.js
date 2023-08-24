const CategoryService = require('./../services/category.service');
const boom = require('@hapi/boom');
const { checkRolesGql } = require('./../utils/auth/checkRolesGql');
const { checkJwtGql } = require('./../utils/auth/checkJwtGql');

const service = new CategoryService();

const addCategory = async (_, { input }, context) => {
  const user = await checkJwtGql(context);
  checkRolesGql(user, 'admin');
  return service.create({
    ...input,
    image: input.image.href,
  });
};

const getCategory = (_, { id }) => {
  return service.findOne(id);
};
module.exports = { addCategory, getCategory };
