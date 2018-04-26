const express = require("express");
const productsRouter = express.Router();
const Product = require("../models/product");

productsRouter.get("/", (req, res) => {
    Product.find((err, products) => {
        if (err) return res.status(500).send(err);
        return res.send(products);
    });
});

productsRouter.post("/", (req, res) => {
    const newProduct = new Product(req.body);
    newProduct.save(err => {
        if (err) return res.status(500).send(err);
        return res.send(newProduct);
    });
});

productsRouter.get("/:id", (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if (err) return res.status(500).send(err);
        return res.send(product);
    });
});

productsRouter.put("/:id", (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedProduct) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedProduct);
    });
});

productsRouter.delete("/:id", (req, res) => {
    Product.findByIdAndRemove(req.params.id, (err, removedProduct) => {
        if (err) return res.status(500).send(err);
        return res.send(removedProduct);
    });
});

module.exports = productsRouter;