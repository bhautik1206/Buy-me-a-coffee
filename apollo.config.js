module.exports = {
  client: {
    service: {
      name: 'my-graphql-app',
      url: 'http://localhost:3000/graphql', // Using absolute URL since we can't use require for esm project and apollo config doesn't support esm.
    },
  },
};
