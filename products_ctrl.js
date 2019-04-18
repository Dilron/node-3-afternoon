module.exports = {
    create(req, res){
        const db = req.app.get('db');
        db.create_product([req.body.name, req.body.description, req.body.price, req.body.image_url]).then(response => {
            res.status(200).send(response)
        })
        .catch(err => console.log('problem in create function: ', err))
    },
    getOne(req, res){
        const db = req.app.get('db');
        db.read_product([req.params.id]).then(response => {
            res.status(200).send(response)
        })
        .catch(err => console.log('problem in getOne function: ', err))
    },
    getAll(req, res){
        const db = req.app.get('db');
        db.read_products().then(response => {
            res.status(200).send(response)
        })
        .catch(err => console.log('problem in getAll function: ', err))
    },
    update(req, res){
        const db = req.app.get('db');
        db.update_product([req.params.id, req.query.desc]).then(response => {
            res.status(200).send(response)
        })
        .catch(err => console.log('problem in update function: ', err))
    },
    delete(req, res){
        const db = req.app.get('db');
        db.delete_product([req.params.id]).then(response => {
            res.status(200).send(response)
        })
        .catch(err => console.log('problem in delete function: ', err))
    }
}