define('ember-data/routes/teste', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			return alert('Ola Mundo');
		}
	});
});