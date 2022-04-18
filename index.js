const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const homeRoutes = require('./routes/home');
const addRoutes = require('./routes/add');
const productsRoutes = require('./routes/products');

const hbs = handlebars.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

const PORT = process.env.port || 3000;
const app = express();

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))
app.use('/', homeRoutes);
app.use('/products', productsRoutes);
app.use('/add', addRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

