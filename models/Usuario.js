let Usuario = (sequelize, Datatypes) => {
    let usuario = sequelize.define(
        'Usuario', 
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
            email:{
                type: Datatypes.STRING(150), 
                allowNull: false
            },
            senha:{
                type: Datatypes.STRING(150), 
                allowNull: false
            },
            usuariosAjudados:{
                type: Datatypes.INTEGER,
                allowNull: false
            },
            imagem:{
                type: Datatypes.STRING(150), 
                allowNull: true
            }
        },
        {
            tableName: "usuario",
            timestamps: true
        }
    )

    usuario.associate = (models) => {

        usuario.hasMany(
            models.Reporte,
            {
                foreignKey: 'id_usuario',
                as: 'usuario'
            }
        );

    }

    return usuario;

}

module.exports = Usuario;
