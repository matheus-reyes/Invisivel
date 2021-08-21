'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
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

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('servico_reporte');
  }
};
