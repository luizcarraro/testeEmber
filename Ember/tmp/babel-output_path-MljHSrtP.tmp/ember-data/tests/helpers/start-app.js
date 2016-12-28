define('ember-data/tests/helpers/start-app', ['exports', 'ember', 'ember-data/app', 'ember-data/config/environment'], function (exports, _ember, _emberDataApp, _emberDataConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    // use defaults, but you can override
    var attributes = _ember['default'].assign({}, _emberDataConfigEnvironment['default'].APP, attrs);

    _ember['default'].run(function () {
      application = _emberDataApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});