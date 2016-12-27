define('ember-data/router', ['exports', 'ember', 'ember-data/config/environment'], function (exports, _ember, _emberDataConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _emberDataConfigEnvironment['default'].locationType,
    rootURL: _emberDataConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('clientes');
  });

  exports['default'] = Router;
});