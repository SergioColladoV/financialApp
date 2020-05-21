const express = require("express");
const router = express.Router();

const Expenses = require("./../models/expenses.model");

// GET
router.get("/expense/:id?", (req, res, next) => {
    console.log(req.query.id);
});

// INSERT
router.post("/expense", (req, res, next) => {
    console.log(req.body);
    Expenses.create(req.body).then((response) =>
        res.status(200).json({ created: response })
    );
});

module.exports = router;
