const Participante = require("../models/participantes");
const Evento = require("../models/evento");
const { getParticipantes } = require("./eventoController");

const ParticipanteController = {
    create: async (req, res) => {
        try {
            const { nome, email, EventoId } = req.body;

            // Verifica se o evento existe
            const evento = await Evento.findByPk(EventoId);
            if (!evento) {
                return res.status(404).json({
                    msg: "Evento não encontrado",
                });
            }

            // Verifica se já existe um participante com o mesmo email no evento
            const emailExistente = await Participante.findOne({
                where: { email, EventoId }
            });

            if (emailExistente) {
                return res.status(400).json({
                    msg: "Participante com esse email já está registrado neste evento",
                });
            }

            // Cria o participante
            const participante = await Participante.create({
                nome,
                email,
                EventoId
            });

            res.status(200).json({
                msg: "Participante criado com sucesso",
                participante,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                msg: "Erro ao criar participante, acione o suporte",
            });
        }
    },

    getAll: async (req, res) => {
        try {
            const participantes = await Participante.findAll();
            res.status(200).json({
                msg: "Participantes encontrados com sucesso",
                participantes,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg: "Erro ao buscar participantes, acione o suporte",
            });
        }
    },

    getOne: async (req, res) => {
        try {
            const { id } = req.params;
            const participante = await Participante.findByPk(id);

            if (!participante) {
                return res.status(404).json({
                    msg: "Participante não encontrado",
                });
            }

            res.status(200).json({
                msg: "Participante encontrado com sucesso",
                participante,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg: "Erro ao buscar participante, acione o suporte",
            });
        }
    },

    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { nome, email } = req.body;

            const participante = await Participante.findByPk(id);
            if (!participante) {
                return res.status(404).json({
                    msg: "Participante não encontrado",
                });
            }

            await Participante.update(
                { nome, email },
                { where: { id } }
            );

            res.status(200).json({
                msg: "Participante atualizado com sucesso",
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg: "Erro ao atualizar participante, acione o suporte",
            });
        }
    },

    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const participante = await Participante.findByPk(id);

            if (!participante) {
                return res.status(404).json({
                    msg: "Participante não encontrado",
                });
            }

            await Participante.destroy({ where: { id } });

            res.status(200).json({
                msg: "Participante deletado com sucesso",
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg: "Erro ao deletar participante, acione o suporte",
            });
        }
    },

    getParticipantes : async(req, res) => {
        try {
            const { EventoId } = req.params;
            const participantes = await Participante.findAll({
                where: { 
                    EventoId : EventoId
                },
            })
            if (!participantes) {
                return res.status(400).json({
                    msg: "Participante não encontrado",
                })
            }
            res.status(200).json(participantes)
        } catch (error) {
            console.error(error)
            return res.status(500).json({
                msg: "Erro ao buscar participantes, acione o suporte",
            })
        }
    }
};

module.exports = ParticipanteController;
