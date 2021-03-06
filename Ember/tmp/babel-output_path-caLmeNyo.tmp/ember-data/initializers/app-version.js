define('ember-data/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ember-data/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _emberDataConfigEnvironment) {
  var _config$APP = _emberDataConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});