const {Router} = require('express');
const router = Router();
const Product = require('../models/product');

router.get('/', (req, res) => {
    res.render('add', {
        title: 'Добавление товара',
        isAdd: true,
    });
})

router.post('/', async (req, res) => {
    const product = new Product(req.body.name, req.body.price, req.body.image);
    await product.save();
    res.redirect('/products');
})

module.exports = router;