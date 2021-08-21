let Especialidade_Reporte = (sequelize, Datatypes) => {
    let especialidade_reporte = sequelize.define(
        'Especialidade_Reporte', 
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
            id_especialidade:{
                type: Datatypes.INTEGER,
                allowNull: false
            }
        },
        {
            tableName: "especialidade_reporte",
            timestamps: false
        }
    )

    return especialidade_reporte;

}

module.exports = Especialidade_Reporte;
