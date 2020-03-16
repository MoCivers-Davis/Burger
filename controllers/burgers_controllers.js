var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js")

// Created all my routes and set up logic within those routes where required.

router.get("/", function (req, res) {
    console.log("This is a test")
    burger.getAll(function (data){
        var dataObject = {burgers: data};
        console.log(dataObject);
        res.render("index", dataObject)
    });
});

router.post("/api/burgers", function (req, res) {
    burger.add(
        ["burger_name"], [req.body.burger_name], function (result) {
            res.json({ id: result.insertId})
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "devoured = " + 0 && req.params.id;

    burger.updateBurger({
        devoured: req.body.devoured = 1
    },
     condition, function (result) {
         if (result.changedRows == 0) {
        

    //If no rows were changed, then the ID must not exist, i.e., 404 error
    return res.status(404).end();
} else {
    res.status(200).end();
}
    });
});

// Export routes for server.js to use
module.exports = router;