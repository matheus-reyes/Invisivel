'use strict';

module.exports = {
  up: async (queryInterface, Datatypes) => {
    return queryInterface.createTable('servico_reporte', {
      id:{
        type: Datatypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      id_reporte:{
          type: Datatypes.INTEGER,
          references:{
            model:'reporte',
            key:'id'
          },
          onDelete:"CASCADE",
          onUpdate:"CASCADE"
      },
      id_servico:{
          type: Datatypes.INTEGER,
          references:{
            model:'servico',
            key:'id'
          },
          onDelete:"CASCADE",
          onUpdate:"CASCADE"
      }
    });
  },

  down: async (queryInterface, Datatypes) => {
    return queryInterface.dropTable('servico_reporte');
  }
};
