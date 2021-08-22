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
            },
            id_reporte:{
                type: Datatypes.INTEGER,
                allowNull: false
            }
        },
        {
            tableName: "especialidade",
            timestamps: false
        }
    )

    especialidade.associate = (models) => {

        especialidade.belongsTo(
            models.Reporte,
            {
                foreignKey: 'id_reporte',
                as: 'reporte'
            }
        );

    }

    return especialidade;

}

module.exports = Especialidade;
