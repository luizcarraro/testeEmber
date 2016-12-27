define('ember-data/helpers/app-version', ['exports', 'ember', 'ember-data/config/environment'], function (exports, _ember, _emberDataConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _emberDataConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});