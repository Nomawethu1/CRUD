




module.exports = app =>{
    const update = require('../controllers/edit-item');

    app.put('/edit/:id', update.updateEdit)
    
}