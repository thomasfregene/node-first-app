const Product = require("../models/product");
const User = require("../models/user");

exports.getAddProduct = (req, res, next) => {
    res.render("admin/edit-product", {
      pageTitle: "Add Product",
      path: "/admin/add-product",
      editing: false
    });
  };
  
  
  exports.postAddProduct = (req, res, next) => {
let id = null;
   

    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;

    console.log('-- '+id);

    /*req.user.createProduct({
      title: title,
        price: price,
        imageUrl: imageUrl,
        description: description
    }).then(result=>{
      console.log("CREATED PRODUCT")
      res.redirect("/")
    })
    .catch(err=>console.log(err))*/

    User.findByPk(1).then(user=>{
      Product.create({
        title: title,
        price: price,
        imageUrl: imageUrl,
        description: description,
        userId: user.id
      }).then(result=>{
        // console.log(result)
        console.log("CREATED PRODUCT")
        res.redirect("/")
      }).catch(err=>console.log(err));
  }).catch(err=>console.log(err));

    
    // const product = new Product(null, title,imageUrl,description,price);
    // product.save().then(()=>{
    //   res.redirect("/");
    // }).catch(err=>console.log(err));
  };

  exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
      return res.redirect('/')
    }
    const prodId = req.params.productId;
    Product.findByPk(prodId).then(product=>{
      res.render("admin/edit-product", {
        pageTitle: "Edit Product",
        path: "/admin/edit-product",
        editing: editMode,
        product:product 
      }); 
    }).catch(err=>console.log(err))
    /*Product.findById(prodId, product=>{
      if (!product) {
        return res.redirect('/')
      }
      res.render("admin/edit-product", {
        pageTitle: "Edit Product",
        path: "/admin/edit-product",
        editing: editMode,
        product:product 
      });
    })*/
    
  };

  exports.postEditProduct = (req, res, next)=>{
    const prodId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedPrice = req.body.price;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDesc = req.body.description;

    Product.findByPk(prodId).then(product=>{
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.imageUrl = updatedImageUrl;
      product.description = updatedDesc;
      return product.save();
    }).then(result=>{
      console.log('Updated Product!')
      res.redirect("/admin/products");
    })
    .catch(err=>console.log(err))
    /*const updatedProduct = new Product(prodId,updatedTitle,updatedImageUrl,updatedDesc,updatedPrice);
    updatedProduct.save();
    res.redirect("/admin/products");*/
  }
  
  exports.getProducts = (req, res, next) =>{
    Product.findAll()
    .then(products=>{
      res.render("admin/products", { prods: products, pageTitle: "Admin Products", path: "/admin/products" });
    })
    .catch(err=>console.log(err));
    /*Product.fetchAll((products) => {
        res.render("admin/products", { prods: products, pageTitle: "Admin Products", path: "/admin/products" });
      });*/
  }

  exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findByPk(prodId).then(product=>{
      product.destroy();
    }).then(result=>{
      console.log('DESTROYED PRODUCT!');
      res.redirect('/admin/products');
    }).catch(err=>console.log(err))
   /* Product.deleteById(prodId);
    res.redirect('/admin/products') */
  }