let Servico_Reporte = (sequelize, Datatypes) => {
    let servico_reporte = sequelize.define(
        'Servico_Reporte', 
        {
            id:{
                type: Datatypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            id_reporte:{
                type: Datatypes.INTEGER,
                allowNull: false
            },
            id_servico:{
                type: Datatypes.INTEGER,
                allowNull: false
            }
        },
        {
            tableName: "servico_reporte",
            timestamps: false
        }
    )

    return servico_reporte;

}

module.exports = Servico_Reporte;
