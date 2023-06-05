module.exports = app => {
    app.post('/save', app.api.conta.save);
    app.get('/contas', app.api.conta.getAll);
    app.get('/conta/:id', app.api.conta.getConta);
    app.delete('/delete/:id', app.api.conta.delConta);
}