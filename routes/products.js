const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('products', {
        title: 'Страница товаров',
        isProducts: true,
    });
})

module.exports = router;