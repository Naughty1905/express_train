const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');

const hbs = handlebars.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

const PORT = process.env.port || 3000;
const app = express();

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

