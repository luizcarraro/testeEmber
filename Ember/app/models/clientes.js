import DS from 'ember-data';

export default DS.Model.extend({
	nome: DS.attr(),
	dataNascimento: DS.attr()
});
