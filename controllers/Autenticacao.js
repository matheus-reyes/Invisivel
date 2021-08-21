const {Usuario, Reporte} = require('../models');
const bcrypt = require('bcrypt');

module.exports = {

    cadastro: async (req, res) => {
        const nome = req.body.nome;
        const email = req.body.email;
        const senha = req.body.senha;
        const usuariosAjudados = 0;
        
        let senhaCriptografada = bcrypt.hashSync(senha, 10);

        await Usuario.create({
            nome,
            email,
            senha: senhaCriptografada,
            usuariosAjudados
        });
            
        res.redirect("/");
    },

    login: async (req, res) => {
        let email = req.body.email;
        let senha = req.body.senha;

        const usuarios = await Usuario.findAll();

        for(let i = 0; i < usuarios.length; i++){

            if(usuarios[i].email == email && bcrypt.compareSync(senha, usuarios[i].senha)){
                
                req.session.usuario = usuarios[i];

                const reportes = await Reporte.findAll();

                res.render("inicio", {usuario:req.session.usuario, reportes});
            }
        }

        res.render("/");
    }

}
