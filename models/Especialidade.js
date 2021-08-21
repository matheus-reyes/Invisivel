let Especialidade = (sequelize, Datatypes) => {
    let especialidade = sequelize.define(
        'Especialidade', 
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
            tableName: "especialidade",
            timestamps: false
        }
    )

    especialidade.associate = (models) => {

        especialidade.belongsToMany(
            models.Reporte,
            {
                foreignKey: 'id_especialidade',
                as: 'especialidade',
                through: models.Especialidade_Reporte
            }
        );

    }

    return especialidade;

}

module.exports = Especialidade;
