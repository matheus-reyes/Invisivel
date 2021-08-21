'use strict';

module.exports = {
  up: async (queryInterface, Datatypes) => {
    return queryInterface.createTable('reporte', {
      id:{
        type: Datatypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      nomeResponsavel:{
          type: Datatypes.STRING(150), 
          allowNull: false
      },
      mensagem:{
          type: Datatypes.STRING(1000),
          allowNull: false
      },
      lat:{
          type: Datatypes.STRING(150),
          allowNull: false
      },
      lng:{
          type: Datatypes.STRING(150),
          allowNull: false
      },
      denuncias:{
          type: Datatypes.INTEGER,
          allowNull: false
      },
      apoios:{
          type: Datatypes.INTEGER,
          allowNull: false
      },
      img:{
        type: Datatypes.STRING(150), 
        allowNull: true
      },
      id_usuario:{
          type: Datatypes.INTEGER,
          references:{
            model:'usuario',
            key:'id'
          },
          onDelete:"CASCADE",
          onUpdate:"CASCADE"
      }
    });
  },

  down: async (queryInterface, Datatypes) => {
    return queryInterface.dropTable('reporte');
  }
};
