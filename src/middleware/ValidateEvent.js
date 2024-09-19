const validateEvent = (req, res, next) => {
    const { nome, data, localizacao } = req.body

    // Preenchida / não preenchida
    if (!nome || !data || !localizacao) {
        return res.status(400).json({
            msg: "Campos invalidos, tente novamente"
        })
    }


    // Pode avançar
    return next();
};

const validateEventId = (req, res, next) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({
            msg: "Parametro faltando"
        });
    }

    return next();
}

module.exports = { validateEvent, validateEventId}



