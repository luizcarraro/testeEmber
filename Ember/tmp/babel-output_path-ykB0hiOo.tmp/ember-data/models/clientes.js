define('ember-data/models/clientes', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({
		nome: _emberData['default'].attr(),
		dataNascimento: _emberData['default'].attr(),
		createdAt: _emberData['default'].attr(),
		updatedAt: _emberData['default'].attr(),
		id: _emberData['default'].attr()
	});
});