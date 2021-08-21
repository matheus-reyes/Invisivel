const axios = require('axios');
const {Reporte, Especialidade, Servico, Especialidade_Reporte, Servico_Reporte} = require('../models');

module.exports = {

    inicio: (req, res) => {
        res.render("inicio");
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
    
            const especialidadeCriada = await Especialidade.create({
                nome: especialidades
            });
    
            const servicoCriado = await Servico.create({
                nome: servicos
            });
    
            await Especialidade_Reporte.create({
                id_reporte: reporteCriado.id,
                id_especialidade: especialidadeCriada.id
            });
    
            await Servico_Reporte.create({
                id_reporte: reporteCriado.id,
                id_servico: servicoCriado.id
            });
    
            let reportes = await Reporte.findAll();
    
            res.render("inicio", {usuario:req.session.usuario, reportes});

        })();

    }
}
