const router = require('express').Router();
let Product = require('../models/product.model')


router.route('/').get((req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => console.log(err))
}
)

router.route('/create').post((req, res) => {
    const product = {
        productName: req.body.productName,
        productDesc: req.body.productDesc,
        productPrice: req.body.productPrice,
        productUrl: req.body.productUrl,
        productCategory: req.body.productCategory
    }
    const newProduct = new Product(product)

    newProduct.save()
        .then(() => res.json('Product created'))
        .catch(err => res.status(400).json(err))
})

router.route('/:id').get((req, res) => {
    const id = req.params.id

    Product.findById(id)
        .then(product => res.json(product))
        .catch(err => res.status(400).json(err))
})

router.route('/update/:id').post((req, res) => {
    const id = req.params.id

    const product = {
        productName: req.body.productName,
        productDesc: req.body.productDesc,
        productPrice: req.body.productPrice,
        productUrl: req.body.productUrl,
        productCategory: req.body.productCategory
    }

    Product.findByIdAndUpdate(id, product)
        .then(() => res.json('Product updated'))
        .catch(err => res.status(400).json(err))
})


router.route('/delete/:id').delete((req, res) => {
    const id = req.params.id

    Product.findByIdAndDelete(id)
        .then(() => res.json('product deleted'))
        .catch(err => res.status(400).json(err))

})


module.exports = router