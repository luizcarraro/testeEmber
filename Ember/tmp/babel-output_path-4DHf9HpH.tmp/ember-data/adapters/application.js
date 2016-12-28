define('ember-data/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].JSONAPIAdapter.extend({
    host: 'http://127.0.0.1:1337'
  });
});