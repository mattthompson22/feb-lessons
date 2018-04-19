const express = require("express");
const catRouter = express.Router();

const uuid = require("uuid");
const CatModel = require("../models/cats.js");

//actual routes go here
catRouter.route("/")
    .get((req, res) => {
        CatModel.find(req.query, (err, foundCats) => {
            if (err) return res.send(err);
            res.status(200).send(foundCats);
        })
    })
    .post((req, res) => {
        const newCat = new CatModel(req.body);
        newCat.save((err, addedCat) => {
            if (err) return res.send(err);
            res.status(201).send(addedCat);
        })
    });

// GET one request
catRouter.route("/:id")
    .get((req, res) => {
        // CatModel.findById(req.params.id, ()=>{})
        CatModel.findOne({ _id: req.params.id }, (err, foundCat) => {
            if (err) return res.send(err);
            if (!foundCat) return res.status(404).send({ message: "Cat not found" })
            res.status(200).send(foundCat);
        })
    })
    // DELETE one request
    .delete((req, res) => {
        // CatModel.findByIdAndRemove(req.params.id, ()=>{})
        CatModel.findOneAndRemove({ _id: req.params.id }, (err, deletedCat) => {
            if (err) return res.send(err);
            if (!deletedCat) return res.status(404).send({ message: "Cat not found" })
            res.status(204).send();
        })
    })
    //PUT one
    .put((req, res) => {
        // CatModel.findByIdAndUpdate(req.params.id,()=>{});
        CatModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, updatedCat) => {
            if (err) return res.send(err);
            if (!updatedCat) return res.status(404).send({ message: "Cat not found" });
            res.status(200).send(updatedCat);
        })
    })

module.exports = catRouter;