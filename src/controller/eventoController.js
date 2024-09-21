const Evento = require("../models/evento");
const Participante = require("../models/participantes");

const EventController = {
    create: async (req, res) => {
        try {
            const { nome, data, localizacao } = req.body;
            const evento = await Evento.create({
                nome: nome,
                data: data,
                localizacao: localizacao,
            });

            res.status(200).json({
                msg: "Evento criado com sucesso",
                evento: evento,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                msg: "Erro ao criar evento, acione o suporte",
            });
        }
    },
    getAll: async (req, res) => {
        try {
            const eventos = await Evento.findAll();
            res.status(200).json({
                msg: "Eventos encontrados com sucesso",
                eventos: eventos,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg: "Erro ao buscar eventos, acione o suporte",
            });
        }
    },
    getOne: async (req, res) => {
        try {
            const { id } = req.params;
            const evento = await Evento.findByPk(id, {
                include: [{ model: Participante, as: 'participantes' }]
            });
            if (!evento) {
                return res.status(404).json({
                    msg: "Evento não encontrado",
                });
            }
            res.status(200).json({
                msg: "Evento encontrado com sucesso",
                evento: evento,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg: "Erro ao buscar evento, acione o suporte",
            });
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { nome, data, localizacao } = req.body;
            const evento = await Evento.findByPk(id);
            if (!evento) {
                return res.status(404).json({
                    msg: "Evento não encontrado",
                });
            }

            await Evento.update({
                nome: nome,
                data: data,
                localizacao: localizacao,
            }, {
                where: { id: id },
            });

            res.status(200).json({
                msg: "Evento atualizado com sucesso",
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg: "Erro ao atualizar evento, acione o suporte",
            });
        }
    },

    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const evento = await Evento.findByPk(id);
            if (!evento) {
                return res.status(404).json({
                    msg: "Evento não encontrado",
                });
            }

            await Evento.destroy({
                where: { id: id }
            });

            res.status(200).json({
                msg: "Evento deletado com sucesso",
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg: "Erro ao deletar evento, acione o suporte",
            });
        }
    },
};

module.exports = EventController;
