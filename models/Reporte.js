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
                type: Datatypes.INTEGER,
                allowNull: false
            },
            lng:{
                type: Datatypes.INTEGER,
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
            permiteLinkedIn:{
                type: Datatypes.BOOLEAN,
                allowNull: false
            },
            permiteFacebook:{
                type: Datatypes.BOOLEAN,
                allowNull: false
            },
            id_usuario:{
                type: Datatypes.INTEGER,
                allowNull: false
            }
        },
        {
            tableName: "reporte",
            timestamps: true
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

        reporte.belongsToMany(
            models.Especialidade,
            {
                foreignKey: 'id_reporte',
                as: 'reporte',
                through: models.Especialidade_Reporte
            }
        );

    }

    return reporte;

}

module.exports = Reporte;
