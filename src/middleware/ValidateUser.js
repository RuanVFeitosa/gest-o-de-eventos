const validateUser = (req, res, next) => {
    const { nome, email } = req.body

    // Preenchida / não preenchida
    if (!nome || !email ) {
        return res.status(400).json({
            msg: "Campos invalidos, tente novamente"
        })
    }


    // Pode avançar
    return next();
};

const validateUserId = (req, res, next) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({
            msg: "Parametro faltando"
        });
    }

    return next();
}

module.exports = { validateUser, validateUserId}