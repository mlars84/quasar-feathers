// Initializes the `quasar-feathers-service` service on path `/quasar-feathers-service`
const createService = require('feathers-nedb');
const createModel = require('../../models/quasar-feathers-service.model');
const hooks = require('./quasar-feathers-service.hooks');
const filters = require('./quasar-feathers-service.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'quasar-feathers-service',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/quasar-feathers-service', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('quasar-feathers-service');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
