const { ApolloServer } = require('apollo-server-express');
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require('apollo-server-core');
const { loadFiles } = require('@graphql-tools/load-files');
const resolvers = require('./resolvers');
const { buildContext } = require('graphql-passport');
const {
  typeDefs: scalarsTypeDef,
  resolvers: scalarsResolvers,
} = require('graphql-scalars');

const useGraphql = async (app) => {
  const typeDefs = [...(await loadFiles('./src/**/*.graphql')), scalarsTypeDef];
  const allResolvers = [resolvers, scalarsResolvers];
  const server = new ApolloServer({
    typeDefs,
    resolvers: allResolvers,
    context: ({ req, res }) => buildContext({ req, res }),
    playground: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  });
  await server.start();
  server.applyMiddleware({ app });
};

module.exports = useGraphql;
