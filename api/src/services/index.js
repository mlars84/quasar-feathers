const users = require('./users/users.service.js');
const quasarFeathersService = require('./quasar-feathers-service/quasar-feathers-service.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(quasarFeathersService);
};
