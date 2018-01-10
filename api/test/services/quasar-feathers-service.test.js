const assert = require('assert');
const app = require('../../src/app');

describe('\'quasar-feathers-service\' service', () => {
  it('registered the service', () => {
    const service = app.service('quasar-feathers-service');

    assert.ok(service, 'Registered the service');
  });
});
