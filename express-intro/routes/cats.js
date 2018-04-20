const express = require("express");
const catRouter = express.Router();

const CatModel = require("../models/cats.js");
const AgencyModel = require("../models/agencies.js");

//actual routes go here
catRouter.route("/")
    .get((req, res) => {
        CatModel.find(req.query)
            .populate("agencyId")
            .exec((err, foundCats) => {
                if (err) return res.send(err);
                res.status(200).send(foundCats)
            });
    })
    .post((req, res) => {
        const newCat = new CatModel(req.body);
        newCat.save((err, savedCat) => {
            if (err) return res.send(err);
            CatModel.populate(savedCat, { path: "agencyId" }, (err, popCat) => {
                if (err) return res.send(err);
                res.status(201).send(popCat);
            });
        });
    });

// GET one request
catRouter.route("/:id")
    .get((req, res) => {
        CatModel.findOne({ _id: req.params.id })
            .populate("agencyId")
            .exec((err, foundCat) => {
                if (err) return res.send(err);
                if (!foundCat) return res.status(404).send({ message: "Cat not found" })
                res.status(200).send(foundCat);
            });
    })
    // DELETE one request
    .delete((req, res) => {
        CatModel.findOneAndRemove({ _id: req.params.id }, (err, deletedCat) => {
            if (err) return res.send(err);
            if (!deletedCat) return res.status(404).send({ message: "Cat not found" })
            res.status(204).send();
        })
    })
    //PUT one
    .put((req, res) => {
        CatModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .populate("agencyId")
            .exec((err, updatedCat) => {
                if (err) return res.send(err);
                if (!updatedCat) return res.status(404).send({ message: "Cat not found" });
                res.status(200).send(updatedCat);
            })
    })

module.exports = catRouter;