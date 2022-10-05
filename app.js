

const express = require('express');

const path = require('path');


const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')))

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');



app.use('/admin', adminData.routes);
app.use('/',shopRoutes);


app.use((req, res, next)=>{
    res.status(404).render('page-not-found',{pageTitle:'Page Not Found'});
})






app.listen(3000);