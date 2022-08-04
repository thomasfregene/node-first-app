
const express = require('express');



const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use((req, res, next)=>{
    res.status(404).send('<h1>Page not found</h1>')
})

app.use(adminRoutes);
app.use(shopRoutes);









app.listen(3000);