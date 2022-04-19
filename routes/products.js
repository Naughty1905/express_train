const {Router} = require('express');
const router = Router();
const Product = require('../models/product');

router.get('/', async (req, res) => {
    const products = await Product.getAll()
    res.render('products', {
        title: 'Страница товаров',
        isProducts: true,
        products,
    });
})

router.get('/:id', async (req,  res) => {
    const product = await Product.getById(req.params.id);
    res.render('product', {
        layout: 'empty',
        title: `Товар ${product.name}`,
        product,
    });
})

module.exports = router;