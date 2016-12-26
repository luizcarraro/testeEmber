define('ember-data/routes/clientes', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			return this.get('store').findAll('clientes');
			//return this.get('http://127.0.0.1:1337').findAll('clientes');
		}
	});
});