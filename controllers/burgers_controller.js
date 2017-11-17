// dependencies
var express = require("express");
var router = express.Router();

// import model
var burger = require("../models/burger.js");

// creating routes
router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res){
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.name, req.body.devoured
    ], function(result) {
        res.json({id: result.inserId});
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log ("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if(result.changedRows == 0) {
            return res.status(404).end();
        } 
        else{
            res.status(200).end();
        }
    });
});

// in case i want to try to work in a delete later
router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    cat.delete(condition, function(result) {
        if (result.affectedRows == 0) {
        return res.status(404).end();
        } else {
        res.status(200).end();
        }
    });
});

// export for server.js
module.exports = router;