'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuario', {
      id:{
        type: Datatypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      nome:{
          type: Datatypes.STRING(150), 
          allowNull: false
      },
      email:{
          type: Datatypes.STRING(150), 
          allowNull: false
      },
      senha:{
          type: Datatypes.STRING(150), 
          allowNull: false
      },
      usuariosAjudados:{
          type: Datatypes.INTEGER,
          allowNull: false
      },
      imagem:{
          type: Datatypes.STRING(150), 
          allowNull: true
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuario');
  }
};
