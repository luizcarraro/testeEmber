/**
 * Usuarios.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	nome:"String",
  	sobrenome:"String"

  },  
  associations: {
      list: "link",
      detail: "record"
  }

};
