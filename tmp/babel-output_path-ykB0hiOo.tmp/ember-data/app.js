define('ember-data/app', ['exports', 'ember', 'ember-data/resolver', 'ember-load-initializers', 'ember-data/config/environment'], function (exports, _ember, _emberDataResolver, _emberLoadInitializers, _emberDataConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _emberDataConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberDataConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberDataResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _emberDataConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});