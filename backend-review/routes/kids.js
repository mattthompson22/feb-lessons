const express = require("express");
const kidsRouter = express.Router();
const Kid = require("../models/kid");
const Chore = require("../models/chore");

kidsRouter.get("/", (req, res) => {
    Kid.find((err, kids) => {
        if (err) return res.status(500).send(err);
        return res.send(kids);
    });
});

kidsRouter.post("/", (req, res) => {
    const newKid = new Kid(req.body);
    newKid.save(err => {
        if (err) return res.status(500).send(err);
        return res.send(newKid);
    });
});

kidsRouter.get("/:id", (req, res) => {
    Kid.findById(req.params.id)
        .populate("chores")
        .exec((err, kid) => {
            if (err) return res.status(500).send(err);
            return res.send(kid);
        });
});

kidsRouter.put("/:id", (req, res) => {
    Kid.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedKid) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedKid);
    });
});

kidsRouter.delete("/:id", (req, res) => {
    Kid.findByIdAndRemove(req.params.id, (err, removedKid) => {
        if (err) return res.status(500).send(err);
        return res.send(removedKid);
    });
});

module.exports = kidsRouter;