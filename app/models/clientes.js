import DS from 'ember-data';

export default DS.Model.extend({
	nome: DS.attr(),
	dataNascimento: DS.attr(),
	createdAt: DS.attr(),
    updatedAt: DS.attr(),
    id: DS.attr()
});
