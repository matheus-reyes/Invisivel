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
            }
        },
        {
            tableName: "servico",
            timestamps: false
        }
    )

    servico.associate = (models) => {

        servico.belongsToMany(
            models.Reporte,
            {
                foreignKey: 'id_servico',
                as: 'servico',
                through: models.Servico_Reporte
            }
        );

    }

    return servico;

}

module.exports = Servico;
