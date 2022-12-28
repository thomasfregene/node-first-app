

const express = require('express');

const path = require('path');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');
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

app.use((req,res,next)=>{
    User.findByPk(1).then(user=>{
        console.log(user.id); 
        req.user = user;
        next();
    }).catch(err=>console.log(err));
})

app.use(errorController.get404)

Product.belongsTo(User,{constraints:true, onDelete:'CASCADE'});
User.hasMany(Product);

// sequelize.sync({force:true})
sequelize.sync()
.then(result=>
    {
        return User.findByPk(1);
        // console.log(result);
    }).then(user=>{
        if(!user){
            return User.create({name:'Tom', email:'test@test.com'})
        }
        return user
    }).then(user=>{
        console.log(user);
        app.listen(3000);

    })
.catch(err=>console.log(err));






