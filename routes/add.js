const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('add', {
        title: 'Добавление товара',
        isAdd: true,
    });
})

router.post('/', (req, res) => {
    console.log(req.body);
    res.redirect('/products');
})

module.exports = router;