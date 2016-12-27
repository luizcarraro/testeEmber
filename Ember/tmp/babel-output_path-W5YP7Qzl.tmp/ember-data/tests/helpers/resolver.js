define('ember-data/tests/helpers/resolver', ['exports', 'ember-data/resolver', 'ember-data/config/environment'], function (exports, _emberDataResolver, _emberDataConfigEnvironment) {

  var resolver = _emberDataResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _emberDataConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberDataConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});