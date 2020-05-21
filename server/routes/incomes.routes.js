const express = require("express");
const router = express.Router();

const Incomes = require("./../models/incomes.model");

// GET
router.get("/income/:id?", (req, res, next) => {
    console.log(req.query.id);
});

// INSERT
router.post("/income", (req, res, next) => {
    console.log(req.body);
    Incomes.create(req.body).then((response) =>
        res.status(200).json({ created: response })
    );
});

module.exports = router;
