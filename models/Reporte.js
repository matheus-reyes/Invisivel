let Reporte = (sequelize, Datatypes) => {
    let reporte = sequelize.define(
        'Reporte', 
        {
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
                allowNull: false
            }
        },
        {
            tableName: "reporte",
            timestamps: false
        }
    )

    reporte.associate = (models) => {

        reporte.belongsTo(
            models.Usuario,
            {
                foreignKey: 'id_usuario',
                as: 'usuario'
            }
        );

        reporte.hasOne(
            models.Especialidade,
            {
                foreignKey: 'id_reporte',
                as: 'especialidade'
            }
        );

        reporte.hasOne(
            models.Servico,
            {
                foreignKey: 'id_reporte',
                as: 'servico'
            }
        );

    }

    return reporte;

}

module.exports = Reporte;
