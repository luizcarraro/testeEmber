define('ember-data/tests/test-helper', ['exports', 'ember-data/tests/helpers/resolver', 'ember-qunit'], function (exports, _emberDataTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_emberDataTestsHelpersResolver['default']);
});