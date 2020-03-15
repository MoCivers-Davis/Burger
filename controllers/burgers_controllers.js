var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Created all my routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.getAll(function (data) {
        console.log(data)
        res.render("index.handlebars", { burger_name: data });
    });
});

router.post("/api/burgers", function (req, res) {
    console.log(req.body)
    burger.addBurger(req.body.new_burger, function (result) {
        console.log(result)
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var id = req.params.id;
    console.log(req.body, req.params.id)

    burger.updateBurger(id, req.body, function (result) {
if (result.changedRows === 0) {

    //If no rows were changed, then the ID must not exist, i.e., 404 error
    return res.status(404).end();
} else {
    res.status(200).end();
}
    });
});

// Export routes for server.js to use
module.exports = router;