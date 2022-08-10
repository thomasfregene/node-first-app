

const express = require('express');

const path = require('path');


const app = express();

app.use(express.static(path.join(__dirname, 'public')))

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');



app.use('/admin', adminRoutes);
app.use('/',shopRoutes);


app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views','page-not-found.html'));
})






app.listen(3000);