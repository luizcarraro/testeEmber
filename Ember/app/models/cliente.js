import DS from 'ember-data';

export default DS.Model.extend({
	nome: DS.attr('string'),
	dataNascimento: DS.attr('date'),
	createdAt: DS.attr('date')
});
