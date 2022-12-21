

const express = require('express');

const path = require('path');

const errorController = require('./controllers/error');
const db = require('./util/database');
var bodyParser = require('body-parser');

const app = express();

// app.set('view engine', 'pug');
app.set('view engine', 'ejs');

app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')))

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/admin', adminRoutes);
app.use('/',shopRoutes);


app.use(errorController.get404)






app.listen(3000);