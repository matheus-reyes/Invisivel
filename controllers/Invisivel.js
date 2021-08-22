const axios = require('axios');
const {Reporte, Especialidade, Servico} = require('../models');

module.exports = {

    inicio: (req, res) => {
        res.render("mapa/inicio");
    },

    criarReporte: async (req, res) => {
        const img = req.file.filename;
        const ReportMesmaPessoa = req.body.ReportMesmaPessoa;
        let nomeResponsavel = "";
        if(ReportMesmaPessoa == undefined){
            nomeResponsavel = req.body.nomeOutraPessoa;
        }else{
            nomeResponsavel = req.session.usuario.nome;
        }
        const mensagem = req.body.mensagem;
        const servicos = req.body.servicos;
        const especialidades = req.body.especialidades;
        const estado = req.body.estado;
        const cidade = req.body.cidade;
        const bairro = req.body.bairro;
        
        const estadoFormatado = estado.replace(" ", "%20");
        const cidadeFormatada = cidade.replace(" ", "%20");
        const bairroFormatado = bairro.replace(" ", "%20");
        const endereco = bairroFormatado + ",%20" + cidadeFormatada + ",%20" + estadoFormatado;

        (async () => {
            const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=&sensor=false&address=${endereco}`);
            const lat = response.data.results[0].geometry.location.lat;
            const lng = response.data.results[0].geometry.location.lng;
            
            const reporteCriado = await Reporte.create({
                nomeResponsavel,
                mensagem,
                lat,
                lng,
                denuncias: 0,
                apoios: 0,
                img,
                id_usuario: req.session.usuario.id
            });
    
            await Especialidade.create({
                nome: especialidades,
                id_reporte: reporteCriado.id
            });
    
            await Servico.create({
                nome: servicos,
                id_reporte: reporteCriado.id
            });
    
            const reportes = await Reporte.findAll({
                include:[
                    {
                        model: Especialidade,
                        as: 'especialidade'
                    },
                    {
                        model: Servico,
                        as: 'servico'
                    }
                ]
            });
    
            res.render("inicio", {usuario:req.session.usuario, reportes});

        })();
    },

    consultarReportes: async (req, res, next) => {
        let reportes = await Reporte.findAll();
        return res.json(reportes);
    }
}
