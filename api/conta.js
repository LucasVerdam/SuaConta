module.exports = app => {
    const save = (req, res) => {
        app.db('contas')
            .insert({
                nome: req.body.nome,
                data: req.body.data,
                nomes: req.body.nomes,
                produtos: req.body.produtos,
                valores: req.body.valores
            })
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
    };

    const getAll = (req, res) => {
        app.db('contas')
            .select('id', 'nome', 'data')
            .then(contas => res.json(contas))
            .catch(err => res.status(500).json(err))

    }

    const getConta = (req, res) => {
        app.db('contas')
            .where('id', req.params.id)
            .select()
            .then(conta => res.json(conta))
            .catch(err => res.status(500).json(err))
    }

    const delConta = (req, res) => {
        app.db('contas')
            .where('id', req.params.id)
            .del()
            .then(conta => res.json(conta))
            .catch(err => res.status(500).json(err))
    }

    return { save, getAll, getConta, delConta }
}