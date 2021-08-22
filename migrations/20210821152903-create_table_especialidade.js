'use strict';

module.exports = {
  up: async (queryInterface, Datatypes) => {
    return queryInterface.createTable('especialidade', {
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
      id_reporte:{
        type: Datatypes.INTEGER,
        references:{
          model:'reporte',
          key:'id'
        },
        onDelete:"CASCADE",
        onUpdate:"CASCADE"
      }
    });
  },

  down: async (queryInterface, Datatypes) => {
    return queryInterface.dropTable('especilidade');
  }
};
