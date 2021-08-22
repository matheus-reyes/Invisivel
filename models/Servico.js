let Servico = (sequelize, Datatypes) => {
    let servico = sequelize.define(
        'Servico', 
        {
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
                allowNull: false
            }
        },
        {
            tableName: "servico",
            timestamps: false
        }
    )

    servico.associate = (models) => {

        servico.belongsTo(
            models.Reporte,
            {
                foreignKey: 'id_reporte',
                as: 'reporte',
            }
        );

    }

    return servico;

}

module.exports = Servico;
