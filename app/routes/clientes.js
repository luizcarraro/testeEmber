import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		//return this.get('store').findAll('clientes'); https://guides.emberjs.com/v2.10.0/tutorial/ember-data/
		return this.get('http://127.0.0.1:1337').findAll('clientes');
	}
});
