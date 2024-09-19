const Participante = require("../models/participantes");
const Evento = require("../models/evento")

const ParticipanteController = {
    create: async (req, res) => {
        try {
            const { nome, email } = req.body;
            const evento = await Evento.create({
                nome: nome,
                email: email,
            });

            req.status(200).json({
                msg: "Participante criado com sucesso",
                evento: evento,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                msg: "Erro ao criar participante, acione o suporte",
            });
        }
    },
    getAll: async (req, res) => {
        try {
            const participante = await Participante.findAll();
            res.status(200).json({
                msg: "Participantes encontrados com sucesso",
                participante: participante,
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
            const { id } = req.params.id;
            const participante = await Participante.findByPk(id)
            res.status(200).json({
                msg: "Participante encontrado com sucesso",
                participante: participante,
            })
        } catch {
            console.error(error);
            return res.status(500).json({
                msg: "Participante não encontrado, acione o suporte"
            })
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params.id;
            const { nome, email } = req.body;
            if (!(await participante.findByPk(id))) {
                return res.status(500).json({
                    msg: "Participante não encontrado, acione o suporte",
                });
            } else {
                Participante.update({
                    nome: nome,
                    email: email
                }, {
                    where: { id: id },
                }
                );
                res.status(200).json({
                    msg: "Participante atualizado com sucesso",
                });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg: "Erro ao atualizar participante, acione o suporte",
            })
        }
    },

    delete: async (req, res) => {
        try {
            const { id } = req.params.id;
            const participante = await Participante.findByPk(id)
            if (!participante) {
                return res.status(500).json({
                    msg: "Participante não encontrado, acione o suporte",
                })
            } else {
                Participante.destroy();
                res.status(200).json({
                    msg: "Participante deletado com sucesso",
                });
            }
        } catch{
            console.error(error);
            return res.status(500).json({
                msg: "Erro ao deletar participante, acione o suporte",
            });
        }
    },

};

module.exports = ParticipanteController;