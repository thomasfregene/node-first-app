

const express = require('express');

const path = require('path');

const errorController = require('./controllers/error')
//const expressHbs = require('express-handlebars');
// const { engine } = require('express-handlebars');


const app = express();

//app.engine('hbs', expressHbs({layoutsDir:'views/layouts', defaultLayout:'main'})) //hbs: handlebars
// app.engine('handlebars', engine({ extname: '.hbs', defaultLayout: "main"}));

app.set('view engine', 'pug');
// app.set('view engine', 'handlebars');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')))

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');



app.use('/admin', adminRoutes);
app.use('/',shopRoutes);


app.use(errorController.get404)






app.listen(3000);