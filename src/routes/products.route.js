/*
* Routing for products
*/

// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

//Import Model
const product = require('../models/product.model');

/*
* Routes
*/

// Create a product
router.post('/', (req,res) => {
    const p = new product({
        title: req.body.title,
        category: req.body.category,
        imageUrl: req.body.imageUrl,
        price : req.body.price
    });
    p
    .save()
    .then(res.status(200).json({success : 'product created'}))
    .catch(err => res.status(500).json({ error: err }))
});

// Read all product
router.get('/', (req,res) => {
    product.find()
    .exec()
    .then(p => res.status(200).json({data: p}))
    .catch(err => res.status(500).json({ error: err }));
});

// Read one single product
router.get('/:id', (req,res) => {
    product.findById({ _id: req.params.id})
    .exec()
    .then(p => res.status(200).json({data:p}))
    .catch(err => res.status(500).json({ error:err}))
});

// Update a product
router.patch('/:id', (req,res) => {
    console.log(req.params.id);
    res.status(200).json({ success: 'Product updated' });
});

// Delete product
router.delete('/:id', (req,res) => {
    product.remove({_id: req.params.id})
    .exec()
    .then(res.status(200).json({success: 'product deleted'}))
    .catch(err => res.status(500).json({ error: err }))
});

// Export this module
module.exports = router;